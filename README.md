# monaco-theme-converter
An easy way to use vscode theme in monaco-editor.

# Supported Language & Theme
## Language
- Java
- JavaScript
## Theme
- VS Dark
- VS
- Ariake Dark

# Usage
```javascript
import MonacoThemeConverter from 'monaco-theme-converter'

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

/**
 * This means you need to upload your resources to the corresponding path as shown below.
 */
const converter = new MonacoThemeConverter({
  domain: 'danzzzz.netlify.app',
  path: '/resources',
})

const editor = monaco.editor.create(document.getElementById('app')!, {
  language: 'javascript',
  value: 'class Test {}',
  automaticLayout: true,
  minimap: {
    enabled: false,
  },
})

converter.setTheme(editor)
```
<img width="1370" alt="image" src="https://github.com/KamiC6238/monaco-theme-converter/assets/23523595/9fa16146-cbbe-4da3-b15a-89a97b94877c">

