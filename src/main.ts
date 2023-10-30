import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { convert, setResourcePrefix } from './core'
import type { EditorOptions, ExtraOptions, ThemesEnum } from './types'
import { assertExtraOptions, makeResourcePrefix, makeTheme } from './utils'

export * from './types'

export default function createEditor(
  element: HTMLElement,
  editorOptions: EditorOptions,
  extraOptions: ExtraOptions,
) {
  assertExtraOptions(extraOptions)

  const resourcePrefix = makeResourcePrefix(extraOptions)
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
