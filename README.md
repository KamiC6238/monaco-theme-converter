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
### Before
```javascript
import * as monaco from 'monaco-editor'

const editor = monaco.editor.create(
  document.getElementById('app'),
  {
    language: 'javascript',
    value: 'function foo() {}',
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
  },
)
```
### After
```javascript
import createEditor from 'monaco-theme-converter'

const { editor, setTheme } = createEditor(
  document.getElementById('app'),
  {
    language: 'javascript',
    value: 'function foo() {}',
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

