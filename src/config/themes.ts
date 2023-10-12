import { THEME_ENUM } from '@/config/enum'
import { makeThemePath } from '@/utils'

export const ThemeFix = {
  VSDark: {
    prefix: THEME_ENUM.VSDark,
    suffix: THEME_ENUM.DarkPlus,
  },
  VS: {
    prefix: THEME_ENUM.VS,
    suffix: THEME_ENUM.LightPlus,
  },
}

export const THEME_MAP = {
  [THEME_ENUM.VSDark]: THEME_ENUM.DarkPlus,
  [THEME_ENUM.VS]: THEME_ENUM.LightPlus,
}

export const THEME_LIST = [
  {
    id: 'Default Dark+',
    label: 'Dark+ (default dark)',
    uiTheme: THEME_ENUM.VSDark,
    path: makeThemePath(THEME_ENUM.DarkPlus),
    extension: 'theme-defaults',
  },
  {
    id: 'Visual Studio Dark',
    label: 'Dark (Visual Studio)',
    uiTheme: THEME_ENUM.VSDark,
    path: makeThemePath(THEME_ENUM.DarkVS),
    extension: 'theme-defaults',
  },
  {
    id: 'Default Light+',
    label: 'Light+ (default light)',
    uiTheme: THEME_ENUM.VS,
    path: makeThemePath(THEME_ENUM.LightPlus),
    extension: 'theme-defaults',
  },
  {
    id: 'Visual Studio Light',
    label: 'Light (Visual Studio)',
    uiTheme: THEME_ENUM.VS,
    path: makeThemePath(THEME_ENUM.LightVS),
    extension: 'theme-defaults',
  },
]
