import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import MonacoThemeConverter from 'monaco-theme-converter'

const converter = new MonacoThemeConverter({
  domain: 'danzzzz.netlify.app',
  path: '/resources',
})

const editor = monaco.editor.create(document.getElementById('app')!, {
  language: 'javascript',
  value: 'class Test {}',
  automaticLayout: true,
  minimap: {
    enabled: false,
  },
})

converter.setTheme(editor, {
  theme: 'VSDark',
})
