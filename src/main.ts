import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { convert, setResourcePrefix } from './core'
import type { ConverterOptions, ThemesEnum } from './types'
import { assertConverterOptions, makeResourcePrefix, makeTheme } from './utils'

export * from './types'

export default function createEditor(
  element: HTMLElement,
  editorOptions: monaco.editor.IStandaloneEditorConstructionOptions & {
    theme?: ThemesEnum
  },
  converterOptions: ConverterOptions,
) {
  assertConverterOptions(converterOptions)

  const resourcePrefix = makeResourcePrefix(converterOptions)
  const defaultTheme = editorOptions?.theme ?? 'VSDark'

  setResourcePrefix(resourcePrefix)
  convert()

  const editor = monaco.editor.create(element, {
    ...editorOptions,
    theme: makeTheme(defaultTheme),
  })

  const setTheme = (theme: ThemesEnum) => {
    editor.updateOptions({
      theme: makeTheme(theme),
    })
  }

  return { editor, setTheme }
}
