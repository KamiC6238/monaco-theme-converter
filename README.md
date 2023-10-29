# monaco-theme-converter
An easy way to use vscode theme in monaco-editor.

## Supported Language & Theme
### Language
- C
- Go
- C#
- C++
- CSS
- PHP
- Java
- Rust
- JSON
- HTML
- Python
- JavaScript
- TypeScript
### Theme
- VS
- VS Dark
- Moonlight
- Ariake Dark
- Vitesse Dark

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
    // rewrite types of theme that you can use to set default vscode theme
    // 'VSDark' | 'VS' | 'AriakeDark'
    theme: 'VSDark',
    minimap: {
      enabled: false,
    },
  },
  // You need to upload the resources to your services
  // example:
  // https://danzzzz.netlify.app/resources/java/java.configuration.json
  // https://danzzzz.netlify.app/resources/java/java.tmLanguage.json
  // https://danzzzz.netlify.app/resources/themes/theme-defaults~dark_plus.json
  {
    domain: 'danzzzz.netlify.app',
    path: '/resources',
  },
)

// or use setTheme API
setTheme('VSDark')
```
## Credits
[monaco-vscode-api](https://github.com/CodinGame/monaco-vscode-api) - VSCode public API plugged on the monaco editor
