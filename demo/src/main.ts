import createEditor from 'monaco-theme-converter'

createEditor(
  document.getElementById('app')!,
  {
    language: 'javascript',
    value: 'class Test {}',
    theme: 'AriakeDark',
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
