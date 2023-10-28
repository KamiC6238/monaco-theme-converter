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
} from '../config'

import {
  fetchJSON,
  makeConfigImportPath,
  makeConfigPath,
  makeGrammarImportPath,
  makeThemeLoader,
} from '../utils'

let resourcePrefix = ''

export function setResourcePrefix(prefix: string) {
  resourcePrefix = prefix
}

export function convert() {
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

  const themeLoader = makeThemeLoader(themes, resourcePrefix)

  setDefaultThemes(
    themeConfigList as IThemeExtensionPoint[],
    async theme => themeLoader![theme.path.slice(1)]!(),
  )

  setLanguages(languages)

  languages.forEach(({ id }) => {
    const path = makeConfigPath(id, false)
    const importPath = makeConfigImportPath(resourcePrefix, id)

    setLanguageConfiguration(path, async () => await fetchJSON(importPath))
  })

  setGrammars(grammars, async ({ language }) => {
    const importPath = makeGrammarImportPath(resourcePrefix, language)
    return await fetchJSON(importPath)
  })
}
