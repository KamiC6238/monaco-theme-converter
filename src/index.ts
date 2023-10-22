import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import MonacoThemeConverter from '../dist/esm/index'
import '../dist/esm/style.css'

const converter = new MonacoThemeConverter({
  domain: 'danzzzz.netlify.app',
  path: '/resources',
})

const editor = monaco.editor.create(document.getElementById('app')!, {
  language: 'java',
  value: 'class Test {}',
  automaticLayout: true,
  minimap: {
    enabled: false,
  },
})

converter.setTheme(editor, {
  theme: 'VS',
})
