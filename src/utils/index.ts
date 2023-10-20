import { themeFix } from '@/config'
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
  const { prefix, suffix } = themeFix[theme]

  return `${prefix} vscode-theme-defaults-themes-${suffix}-json`
}

export async function fetchJSON(url: string) {
  const result = await fetch(url)
  return await result.json()
}
