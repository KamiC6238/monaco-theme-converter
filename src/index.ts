import type { ThemesEnum } from './main'
import createEditor from './main'

createEditor(
  document.getElementById('app')!,
  {
    language: 'javascript',
    value: 'class Test {}',
    automaticLayout: true,
    theme: 'Sakura' as ThemesEnum,
    minimap: {
      enabled: false,
    },
  },
  {
    domain: 'danzzzz.netlify.app',
    path: '/resources',
    themes: [
      {
        baseTheme: 'vs-dark',
        filename: 'sakura',
        theme: 'Sakura',
      },
    ],
  },
)
