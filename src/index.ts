// import getLanguagesServiceOverride, { setLanguages } from 'vscode/service-override/languages'

// import MonacoThemeConverter from 'monaco-theme-converter'
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import createEditor from '../dist/esm/index'
import '../dist/esm/style.css'

const { setTheme } = createEditor(
  document.getElementById('app')!,
  {
    language: 'javascript',
    value: 'class Test {}',
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
  },
  {
    domain: 'danzzzz.netlify.app',
    path: '/resources',
  },
)

setTheme('VSDark')
