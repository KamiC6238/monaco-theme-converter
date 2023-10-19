import Core from '@/core'
import type { IMonacoThemeConverter, IThemes } from '@/types'
import { makeTheme } from '@/utils'

// eslint-disable-next-line import/order
import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export default class MonacoThemeConverter {
  private editor: monaco.editor.IStandaloneCodeEditor | null = null
  private core: Core | null = null
  private sourcePrefix = ''

  constructor(props: IMonacoThemeConverter) {
    const { editor, domain, path = '/', protocol = 'https' } = props
    this.editor = editor
    this.sourcePrefix = `${protocol}://${domain}${path}`
    this.core = new Core(this.sourcePrefix)
    this.core.init()
  }

  setTheme(theme: keyof IThemes) {
    if (!this.editor)
      return

    this.editor.updateOptions({
      theme: makeTheme(theme),
    })
  }
}
