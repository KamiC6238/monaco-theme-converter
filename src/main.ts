import '@/core'
import type { IThemes } from '@/types'
import { makeTheme } from '@/utils'

// eslint-disable-next-line import/order
import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export default class MonacoThemeConverter {
  private editor: monaco.editor.IStandaloneCodeEditor | null = null

  constructor(editor: monaco.editor.IStandaloneCodeEditor) {
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

// const editor = monaco.editor.create(document.getElementById('app')!, {
//   language: 'javascript',
//   value: 'function foo() {}',
//   automaticLayout: true,
//   minimap: {
//     enabled: false,
//   },
// })

// const converter = new MonacoThemeConverter(editor)

// converter.setTheme('VSDark')
