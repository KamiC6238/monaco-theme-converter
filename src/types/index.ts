import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export type ThemeLoader = Record<string, () => Promise<string>>

export interface IThemes {
  /** @description vs-dark theme (Dark) */
  VSDark: string
  /** @description vs theme (Light) */
  VS: string
  /** @description Ariake Dark theme */
  AriakeDark: string
  /** @description Vitesse Dark theme */
  VitesseDark: string
  /** @description moonlight II Italic theme */
  Moonlight: string
  /** @description Atom one dark theme */
  AtomOneDark: string
  /** @description Atom one light theme */
  AtomOneLight: string
}

export type ThemesEnum = keyof IThemes

export type BaseTheme = 'vs-dark' | 'vs'

export interface Themes {
  [theme: string]: {
    actuallyUsed: string
    notActuallyUsed: string
    base: BaseTheme
  }
}

export interface ThemeFix {
  [theme: string]: {
    baseTheme: BaseTheme
    notActuallyUsed: string
  }
}

export interface ThemeConfig {
  id: string
  label: string
  uiTheme: BaseTheme
  extension: string
  path: string
}

export interface ThemeOptions {
  theme?: ThemesEnum
}

export type EditorOptions = monaco.editor.IStandaloneEditorConstructionOptions & {
  theme?: ThemesEnum
}

export interface ExtraOptions {
  /**
   * @description The domain used for resources of languages or themes.
   * @example static.kobayashi.com
   */
  domain: string
  /**
   * @description The resources path of languages or themes, default is '/'
   * @example
   * "https://${domain}/java/java-configuration.json"
   * "https://${domain}/java/java.tmLanguage.json"
   * "https://${domain}/themes/dark_plus.json"
   *
   * @description if path is '/resources', that means
   * @example "https://${domain}/resources/java/java-configuration.json"
   */
  path?: string
  /**
   * @description protocol, default is https
   */
  protocol?: string
}
