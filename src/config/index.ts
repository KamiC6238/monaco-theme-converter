import { makeThemePath } from '@/utils'

export const Themes = {
  DarkPlus: 'dark_plus',
  DarkVS: 'dark_vs'
}

export const ThemeConfigList = [
  {
    id: "Default Dark+",
    label: "Dark+ (default dark)",
    uiTheme: "vs-dark",
    path: makeThemePath(Themes.DarkPlus),
    extension: "theme-defaults"
  },
  {
    id: "Visual Studio Dark",
    label: "Dark (Visual Studio)",
    uiTheme: "vs-dark",
    path: makeThemePath(Themes.DarkVS),
    extension: "theme-defaults"
  }
]