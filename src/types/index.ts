import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export interface IThemes {
  VSDark: string
  VS: string
}

export interface IMonacoThemeConverter {
  editor: monaco.editor.IStandaloneCodeEditor
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
