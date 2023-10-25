import { themeFix } from '../config'

// eslint-disable-next-line import/order
import type { BaseTheme, IThemes, ThemeConfig } from '../types'

export function makeThemePath(theme: string, needDot = true) {
  return `${needDot ? '.' : ''}/themes/${theme}.json`
}

export function makeConfigPath(language: string, needDot = true) {
  return `${needDot ? '.' : ''}/${language}-configuration.json`
}

export function makeGrammarPath(language: string, needDot = true) {
  return `${needDot ? '.' : ''}/${language}.tmLanguage.json`
}

export function makeConfigImportPath(resourcePrefix: string, language: string) {
  return `${resourcePrefix}/${language}${makeConfigPath(language, false)}`
}

export function makeGrammarImportPath(resourcePrefix: string, language: string, suffix = true) {
  return `${resourcePrefix}/${language}/${language}.tmLanguage${suffix ? '.json' : ''}`
}

export function makeThemeImportPath(resourcePrefix: string, theme: string) {
  return `${resourcePrefix}/themes/theme-defaults~${theme}.json`
}

export function makeTheme(theme: keyof IThemes) {
  const { baseTheme, notActuallyUsed } = themeFix[theme]

  return `${baseTheme} vscode-theme-defaults-themes-${notActuallyUsed}-json`
}

export function makeThemeConfig(base: BaseTheme, theme: string): ThemeConfig {
  return {
    id: base === 'vs-dark' ? 'Default Dark+' : 'Default Light+',
    label: base === 'vs-dark' ? 'Dark+ (default dark)' : 'Light+ (default light)',
    uiTheme: base,
    extension: 'theme-defaults',
    path: makeThemePath(theme),
  }
}

export async function fetchJSON(url: string) {
  const result = await fetch(url)
  return JSON.stringify(await result.json())
}
