import { convert, setResourcePrefix } from '@/core'
import { makeTheme } from '@/utils'

// eslint-disable-next-line import/order
import type { IMonacoThemeConverter, ThemeOptions } from './types'

// eslint-disable-next-line import/order
import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export * from './types'

export default class MonacoThemeConverter {
  constructor(props: IMonacoThemeConverter) {
    const { domain, path = '/', protocol = 'https' } = props

    if (!domain)
      throw new Error('please provide domain!')

    if (typeof domain !== 'string')
      throw new TypeError('domain is not a string!')

    if (protocol !== 'http' && protocol !== 'https')
      throw new Error('protocol must be http or https!')

    const resourcePrefix = `${protocol}://${domain}${path}`

    setResourcePrefix(resourcePrefix)
    convert()
  }

  setTheme(editor: monaco.editor.IStandaloneCodeEditor, options: ThemeOptions = {}) {
    if (!editor)
      return

    const { theme = 'VSDark' } = options

    editor.updateOptions({
      theme: makeTheme(theme),
    })
  }
}
