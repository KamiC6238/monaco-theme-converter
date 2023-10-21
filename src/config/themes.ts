import { makeThemeConfig } from '@/utils'

// eslint-disable-next-line import/order
import type { ThemeConfig, ThemeFix, Themes } from '../types'

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

export const themeFix: ThemeFix = Object.keys(themes).reduce((res, cur) => {
  res[cur] = {
    baseTheme: themes[cur].base,
    notActuallyUsed: themes[cur].notActuallyUsed,
  }
  return res
}, {} as ThemeFix)

export const ThemeConfigList: ThemeConfig[] = Object.keys(themes).reduce((res, cur) => {
  const { base, notActuallyUsed } = themes[cur]
  res.push(makeThemeConfig(base, notActuallyUsed))
  return res
}, [] as ThemeConfig[])
