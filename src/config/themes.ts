import type { AdditionalTheme, Themes } from '../types'
import { makeAdditionalThemes } from '../utils'

const defaultTheme: Themes = {
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
}

const additionalThemes: AdditionalTheme[] = [
  {
    baseTheme: 'vs-dark',
    filename: 'ariake_dark',
    theme: 'AriakeDark',
  },
  {
    baseTheme: 'vs-dark',
    filename: 'vitesse_dark',
    theme: 'VitesseDark',
  },
  {
    baseTheme: 'vs-dark',
    filename: 'moonlight',
    theme: 'Moonlight',
  },
  {
    baseTheme: 'vs-dark',
    filename: 'atom_one_dark',
    theme: 'AtomOneDark',
  },
  {
    baseTheme: 'vs-dark',
    filename: 'atom_one_light',
    theme: 'AtomOneLight',
  },
]

export const themes: Themes = {
  ...defaultTheme,
  ...makeAdditionalThemes(additionalThemes),
}
