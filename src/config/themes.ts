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
  VitesseDark: {
    actuallyUsed: 'vitesse_dark',
    notActuallyUsed: 'vitesse_dark',
    base: 'vs-dark',
  },
  Moonlight: {
    actuallyUsed: 'moonlight',
    notActuallyUsed: 'moonlight',
    base: 'vs-dark',
  },
  AtomOneDark: {
    actuallyUsed: 'atom_one_dark',
    notActuallyUsed: 'atom_one_dark',
    base: 'vs-dark',
  },
  AtomOneLight: {
    actuallyUsed: 'atom_one_light',
    notActuallyUsed: 'atom_one_light',
    base: 'vs-dark',
  },
}

export const themeFix: ThemeFix = makeThemeFix(themes)
export const themeConfigList: ThemeConfig[] = makeThemeConfigList(themes)
