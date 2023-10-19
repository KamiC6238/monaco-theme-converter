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
  makeConfigImportPath,
  makeConfigPath,
  makeGrammarImportPath,
  makeThemeImportPath,
  makeThemePath,
} from '@/utils'

type ThemeLoader = Record<string, () => Promise<string>>

export default class Core {
  private themeLoader: ThemeLoader | null = null
  private sourceUrl = ''

  constructor(sourceUrl: string) {
    this.sourceUrl = sourceUrl
  }

  init() {
    this.initServices()
    this.initThemeLoader()
    this.initDefaultTheme()
    this.initLanguages()
    this.initGrammars()
  }

  private initServices() {
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
  }

  private initThemeLoader() {
    this.themeLoader = Object.values(themes).reduce((res, cur) => {
      const importPath = makeThemeImportPath(cur)
      res[makeThemePath(cur, false)] = async () => (await import(importPath)).default
      return res
    }, {} as ThemeLoader)
  }

  private initDefaultTheme() {
    if (this.themeLoader) {
      setDefaultThemes(
        themeConfigList as IThemeExtensionPoint[],
        async theme => this.themeLoader![theme.path.slice(1)]!(),
      )
    }
  }

  private initLanguages() {
    setLanguages(languages)

    languages.forEach(({ id }) => {
      const path = makeConfigPath(id, false)
      const importPath = makeConfigImportPath(id)

      setLanguageConfiguration(path, async () => (await import(importPath)).default)
    })
  }

  private initGrammars() {
    setGrammars(grammars, async ({ language }) => {
      const importPath = makeGrammarImportPath(language)
      return (await import(importPath)).default
    })
  }
}
