import onigFile from 'vscode-oniguruma/release/onig.wasm?url'
import getConfigurationServiceOverride from 'vscode/service-override/configuration'
import getDialogsServiceOverride from 'vscode/service-override/dialogs'
import getLanguageConfigurationServiceOverride, { setLanguageConfiguration } from 'vscode/service-override/languageConfiguration'
import getLanguagesServiceOverride, { setLanguages } from 'vscode/service-override/languages'
import getTextmateServiceOverride, { setGrammars } from 'vscode/service-override/textmate'
import type { IThemeExtensionPoint } from 'vscode/service-override/theme'
import getThemeServiceOverride, { setDefaultThemes } from 'vscode/service-override/theme'
import { StandaloneServices } from 'vscode/services'

import {
  grammars,
  languages,
  themeConfigList,
  themes,
} from '@/config'

import {
  fetchJSON,
  makeConfigImportPath,
  makeConfigPath,
  makeGrammarImportPath,
  makeThemeImportPath,
  makeThemePath,
} from '@/utils'

type ThemeLoader = Record<string, () => Promise<string>>

let resourcePrefix = ''

export function setResourcePath(prefix: string) {
  resourcePrefix = prefix
}

export function init() {
  StandaloneServices.initialize({
    // remove dialog override service will occur server circle error
    ...getDialogsServiceOverride(),
    ...getConfigurationServiceOverride(),
    ...getTextmateServiceOverride(async () => {
      const response = await fetch(onigFile)
      return await response.arrayBuffer()
    }),
    ...getThemeServiceOverride(),
    ...getLanguageConfigurationServiceOverride(),
    ...getLanguagesServiceOverride(),
  })

  const themeLoader = Object.values(themes).reduce((res, cur) => {
    const importPath = makeThemeImportPath(resourcePrefix, cur)
    res[makeThemePath(cur, false)] = async () => (await import(importPath)).default
    return res
  }, {} as ThemeLoader)

  setDefaultThemes(
    themeConfigList as IThemeExtensionPoint[],
    async theme => themeLoader![theme.path.slice(1)]!(),
  )

  setLanguages(languages)

  languages.forEach(({ id }) => {
    const path = makeConfigPath(id, false)
    const importPath = makeConfigImportPath(resourcePrefix, id)

    setLanguageConfiguration(path, async () => (await import(importPath)).default)
  })

  setGrammars(grammars, async ({ language }) => {
    const importPath = makeGrammarImportPath(resourcePrefix, language)
    await fetchJSON(importPath)
    return (await import(importPath)).default
  })
}
