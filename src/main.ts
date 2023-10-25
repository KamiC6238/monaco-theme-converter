import { convert, setResourcePrefix } from './core'
import { makeTheme } from './utils'

// eslint-disable-next-line import/order
import type { ConverterOptions, IThemes } from './types'

// eslint-disable-next-line import/order
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export * from './types'

export default function createEditor(
  element: HTMLElement,
  editorOptions: monaco.editor.IStandaloneEditorConstructionOptions,
  converterOptions: ConverterOptions,
) {
  const { domain, path = '/', protocol = 'https' } = converterOptions

  if (!domain)
    throw new Error('please provide domain!')

  if (typeof domain !== 'string')
    throw new TypeError('domain is not a string!')

  if (protocol !== 'http' && protocol !== 'https')
    throw new Error('protocol must be http or https!')

  const resourcePrefix = `${protocol}://${domain}${path}`

  setResourcePrefix(resourcePrefix)
  convert()

  const editor = monaco.editor.create(element, editorOptions)

  const setTheme = (theme: keyof IThemes) => {
    editor.updateOptions({
      theme: makeTheme(theme),
    })
  }

  return {
    setTheme,
    editor,
  }
}
