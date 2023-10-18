import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export interface IThemes {
  VSDark: string
  VS: string
}

export interface IMonacoThemeConverter {
  editor: monaco.editor.IStandaloneCodeEditor
  /**
   * @description Maybe a CDN url, or other to save language configuration, grammars, themes resources.
   *
   * example:
   *  1. https://static.abc.xyz/resources/java/java-configuration.json
   *  2. https://static.abc.xyz/resources/java/java.tmLanguage.json
   *  3. https://static.abc.xyz/resources/themes/dark_plus.json
   *
   * required if not provide theme url & configuration url & tmLanguage url
   */
  url?: string
  /** customzed theme source url */
  themeUrl?: string
  /** customzed language configuration source url */
  configurationUrl?: string
  /** customzed language tmLanguage source url */
  tmLanguageUrl?: string
}
