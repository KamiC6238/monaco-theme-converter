import { ThemeFix } from '@/config'
import type { IThemes } from '@/types'

export function makeThemePath(theme: string, needDot = true) {
  return `${needDot ? '.' : ''}/themes/${theme}.json`
}

export function makeConfigPath(language: string, needDot = true) {
  return `${needDot ? '.' : ''}/${language}-configuration.json`
}

export function makeGrammarPath(language: string, needDot = true) {
  return `${needDot ? '.' : ''}/${language}.tmLanguage.json`
}

export function makeConfigImportPath(language: string) {
  return `../resources/${language}${makeConfigPath(language, false)}?raw`
}

export function makeGrammarImportPath(language: string, suffix = true) {
  return `../resources/${language}/${language}.tmLanguage${suffix ? '.json' : ''}?raw`
}

export function makeThemeImportPath(theme: string) {
  return `../resources/themes/theme-defaults~${theme}.json?raw`
}

export function makeTheme(theme: keyof IThemes) {
  const { prefix, suffix } = ThemeFix[theme]

  return `${prefix} vscode-theme-defaults-themes-${suffix}-json`
}
