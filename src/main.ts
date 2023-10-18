import '@/core'
import type { IMonacoThemeConverter, IThemes } from '@/types'
import { makeTheme } from '@/utils'

// eslint-disable-next-line import/order
import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export default class MonacoThemeConverter {
  private editor: monaco.editor.IStandaloneCodeEditor | null = null

  constructor(props: IMonacoThemeConverter) {
    const { editor } = props
    this.editor = editor
  }

  setTheme(theme: keyof IThemes) {
    if (!this.editor)
      return

    this.editor.updateOptions({
      theme: makeTheme(theme),
    })
  }
}
