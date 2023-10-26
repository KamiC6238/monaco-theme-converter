import createEditor from 'monaco-theme-converter'

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
