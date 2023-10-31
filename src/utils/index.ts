import type { AdditionalTheme, BaseTheme, ExtraOptions, ThemeConfig, ThemeFix, ThemeLoader, Themes, ThemesEnum } from '../types'

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

export function makeTheme(theme: ThemesEnum, themeFix: ThemeFix) {
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

export function makeThemeFix(themes: Themes) {
  return Object.keys(themes).reduce((res, cur) => {
    res[cur] = {
      baseTheme: themes[cur].base,
      notActuallyUsed: themes[cur].notActuallyUsed,
    }
    return res
  }, {} as ThemeFix)
}

export function makeThemeConfigList(themes: Themes) {
  return Object.keys(themes).reduce((res, cur) => {
    const { base, notActuallyUsed } = themes[cur]
    res.push(makeThemeConfig(base, notActuallyUsed))
    return res
  }, [] as ThemeConfig[])
}

export function makeThemeLoader(themes: Themes, resourcePrefix: string) {
  return Object.values(themes).reduce((res, { notActuallyUsed }) => {
    const importPath = makeThemeImportPath(resourcePrefix, notActuallyUsed)
    const themePath = makeThemePath(notActuallyUsed, false)

    res[themePath] = async () => await fetchJSON(importPath)
    return res
  }, {} as ThemeLoader)
}

export function makeResourcePrefix(extraOptions: ExtraOptions) {
  const { domain, path = '/', protocol = 'https' } = extraOptions
  return `${protocol}://${domain}${path}`
}

export function assertExtraOptions(extraOptions: ExtraOptions) {
  const { domain, path = '/', protocol = 'https' } = extraOptions

  if (!domain)
    throw new Error('please provide domain!')

  if (typeof domain !== 'string')
    throw new TypeError('domain is not a string!')

  if (typeof path !== 'string')
    throw new TypeError('path is not a string!')

  if (protocol !== 'http' && protocol !== 'https')
    throw new Error('protocol must be http or https!')
}

export async function fetchJSON(url: string) {
  const result = await fetch(url)
  return JSON.stringify(await result.json())
}

export function makeAdditionalThemes(themes: AdditionalTheme[]) {
  return themes.reduce((res, cur) => {
    res[cur.theme] = {
      base: cur.baseTheme,
      actuallyUsed: cur.filename,
      notActuallyUsed: cur.filename,
    }
    return res
  }, {} as Themes)
}
