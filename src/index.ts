import createEditor from './main'

createEditor(
  document.getElementById('app')!,
  {
    language: 'javascript',
    value: 'class Test {}',
    automaticLayout: true,
    theme: 'AtomOneLight',
    minimap: {
      enabled: false,
    },
  },
  {
    domain: 'danzzzz.netlify.app',
    path: '/resources',
  },
)
