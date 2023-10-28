import createEditor from './main'

createEditor(
  document.getElementById('app')!,
  {
    language: 'css',
    value: 'class Test {}',
    automaticLayout: true,
    theme: 'AriakeDark',
    minimap: {
      enabled: false,
    },
  },
  {
    domain: 'danzzzz.netlify.app',
    path: '/resources',
  },
)
