import '@/index.css'
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
  GRAMMAR_LIST,
  LANGUAGES_ENUM,
  LANGUAGE_LIST,
  THEME_ENUM,
  THEME_LIST,
} from '@/config'

import {
  makeConfigImportPath,
  makeConfigPath,
  makeGrammarImportPath,
  makeThemeImportPath,
  makeThemePath,
} from '@/utils'

StandaloneServices.initialize({
  // 删掉这个 dialog server 会导致 server 循环加载，不知道为什么
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

const themeLoader = Object.values(THEME_ENUM).reduce((res, cur) => {
  const importPath = makeThemeImportPath(cur)
  res[makeThemePath(cur, false)] = async () => (await import(importPath)).default
  return res
}, {} as Record<string, () => Promise<string>>)

setDefaultThemes(
  THEME_LIST as IThemeExtensionPoint[],
  async theme => themeLoader[theme.path.slice(1)]!(),
)

setLanguages(LANGUAGE_LIST)

Object.values(LANGUAGES_ENUM).forEach((language) => {
  const path = makeConfigPath(language, false)
  const importPath = makeConfigImportPath(language)

  setLanguageConfiguration(path, async () => (await import(importPath)).default)
})

setGrammars(GRAMMAR_LIST, async ({ language }) => {
  // const fixedGrammarLang = (language: string) => {
  //   switch (language) {
  //     case 'typescript-basics':
  //       return 'typescript'
  //     default:
  //       return language
  //   }
  // }

  // const _language = fixedGrammarLang(language)

  const importPath = makeGrammarImportPath(language)
  return (await import(importPath)).default
})
