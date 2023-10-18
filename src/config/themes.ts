import { makeThemePath } from '@/utils'

export const themes = {
  VSDark: 'vs-dark',
  VS: 'vs',

  DarkPlus: 'dark_plus',
  DarkVS: 'dark_vs',
  LightPlus: 'light_plus',
  LightVS: 'light_vs',
}

export const themeFix = {
  VSDark: {
    prefix: themes.VSDark,
    suffix: themes.DarkPlus,
  },
  VS: {
    prefix: themes.VS,
    suffix: themes.LightPlus,
  },
}

export const THEME_MAP = {
  [themes.VSDark]: themes.DarkPlus,
  [themes.VS]: themes.LightPlus,
}

export const themeConfigList = [
  {
    id: 'Default Dark+',
    label: 'Dark+ (default dark)',
    uiTheme: themes.VSDark,
    path: makeThemePath(themes.DarkPlus),
    extension: 'theme-defaults',
  },
  {
    id: 'Visual Studio Dark',
    label: 'Dark (Visual Studio)',
    uiTheme: themes.VSDark,
    path: makeThemePath(themes.DarkVS),
    extension: 'theme-defaults',
  },
  {
    id: 'Default Light+',
    label: 'Light+ (default light)',
    uiTheme: themes.VS,
    path: makeThemePath(themes.LightPlus),
    extension: 'theme-defaults',
  },
  {
    id: 'Visual Studio Light',
    label: 'Light (Visual Studio)',
    uiTheme: themes.VS,
    path: makeThemePath(themes.LightVS),
    extension: 'theme-defaults',
  },
]
