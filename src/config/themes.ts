import type { ThemeConfig, ThemeFix, Themes } from '../types'
import { makeThemeConfigList, makeThemeFix } from '../utils'

export const themes: Themes = {
  VSDark: {
    actuallyUsed: 'vs-dark',
    notActuallyUsed: 'dark_plus',
    base: 'vs-dark',
  },
  _VSDark: {
    actuallyUsed: 'vs-dark',
    notActuallyUsed: 'dark_vs',
    base: 'vs-dark',
  },
  VS: {
    actuallyUsed: 'vs',
    notActuallyUsed: 'light_plus',
    base: 'vs',
  },
  _VS: {
    actuallyUsed: 'vs',
    notActuallyUsed: 'light_vs',
    base: 'vs',
  },
  AriakeDark: {
    actuallyUsed: 'ariake_dark',
    notActuallyUsed: 'ariake_dark',
    base: 'vs-dark',
  },
}

export const themeFix: ThemeFix = makeThemeFix(themes)
export const themeConfigList: ThemeConfig[] = makeThemeConfigList(themes)
