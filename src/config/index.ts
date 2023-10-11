import { IThemes } from '@/types'
import { makeConfigPath, makeGrammarPath, makeThemePath } from '@/utils'

export const Themes: IThemes = {
  VSDark: 'vs-dark'
}

export const THEME_ENUM = {
  DarkPlus: 'dark_plus',
  DarkVS: 'dark_vs'
}

export const THEME_MAP = {
  [Themes.VSDark]: THEME_ENUM.DarkPlus
}

export function makeTheme(theme: keyof IThemes) {
  const prefix = Themes[theme]
  const suffix = THEME_MAP[prefix]

  return `${prefix} vscode-theme-defaults-themes-${suffix}-json`;
}

export const THEME_CONFIG_LIST = [
  {
    id: "Default Dark+",
    label: "Dark+ (default dark)",
    uiTheme: "vs-dark",
    path: makeThemePath(THEME_ENUM.DarkPlus),
    extension: "theme-defaults"
  },
  {
    id: "Visual Studio Dark",
    label: "Dark (Visual Studio)",
    uiTheme: "vs-dark",
    path: makeThemePath(THEME_ENUM.DarkVS),
    extension: "theme-defaults"
  }
]

export const LANGUAGES_ENUM = {
  Java: 'java'
}

export const LANGUAGE_LIST = [
  {
    id:"java",
    extensions:[".java",".jav"],
    aliases:["Java","java"],
    configuration: makeConfigPath(LANGUAGES_ENUM.Java)
  }
]

export const GRAMMAR_LIST = [
  {
    language:"java",
    scopeName:"source.java",
    path: makeGrammarPath(LANGUAGES_ENUM.Java),
  }
]