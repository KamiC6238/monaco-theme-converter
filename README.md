# monaco-theme-converter
An easy way to use vscode theme in monaco-editor.

# Usage
```javascript
import MonacoThemeConverter from 'monaco-theme-converter'

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

const editor = monaco.editor.create(document.getElementById('app'), {
  language: 'javascript',
  value: 'function foo() {}',
})

const converter = new MonacoThemeConverter(editor)

converter.setTheme('VSDark')
```
