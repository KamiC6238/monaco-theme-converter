import { init, setResourcePath } from '@/core'
import type { IMonacoThemeConverter, IThemes } from '@/types'
import { makeTheme } from '@/utils'

// eslint-disable-next-line import/order
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

// eslint-disable-next-line import/order
// import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export default class MonacoThemeConverter {
  private editor: monaco.editor.IStandaloneCodeEditor | null = null

  constructor(props: IMonacoThemeConverter) {
    const { editor, domain, path = '/', protocol = 'https' } = props
    this.editor = editor

    setResourcePath(`${protocol}://${domain}${path}`)
  }

  setTheme(theme: keyof IThemes) {
    if (!this.editor)
      return

    this.editor.updateOptions({
      theme: makeTheme(theme),
    })
  }
}

setResourcePath(`http://localhost:5173/resources`)
init()

const editor = monaco.editor.create(document.getElementById('app')!, {
  language: 'java',
  value: 'class Test {}',
})

const converter = new MonacoThemeConverter({
  editor,
  domain: 'localhost:5173',
  path: '/resources',
})

converter.setTheme('VSDark')
