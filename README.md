# monaco-theme-converter
An easy way to use vscode theme in monaco-editor.

## Supported Language & Theme
### Language
- Java
- JavaScript
### Theme
- VS Dark
- VS
- Ariake Dark

## Usage
```javascript
import createEditor from 'monaco-theme-converter'

const { editor, setTheme } = createEditor(
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
```

