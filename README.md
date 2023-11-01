# monaco-theme-converter
An easy way to use vscode theme in monaco-editor based on [monaco-vscode-api](https://github.com/CodinGame/monaco-vscode-api).

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
- Atom One Dark
- Atom One Light

## Usage
### Basic Usage
#### Before
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
#### After
In comparison to the native approach, apart from the distinction in calling the API to create an editor, there is another difference. `createEditor` supports the provision of a third parameter, which is used to specify the path for supplying language and theme resources. When you are using a specific language or theme, this library will fetch resources from the address you provided.

```javascript
import createEditor from 'monaco-theme-converter'

const { editor, setTheme } = createEditor(
  document.getElementById('app'),
  {
    language: 'javascript',
    value: 'function foo() {}',
    automaticLayout: true,
    // rewrite types of theme that you can use to set default vscode theme
    theme: 'AtomOneDark',
    minimap: {
      enabled: false,
    },
  },
  {
    domain: 'danzzzz.netlify.app',
    path: '/resources',
  },
)

// or use setTheme API
setTheme('VSDark')
```
In the above code, you can see that the domain is `danzzzz.netlify.app` and the path is `/resources`. This indicates that when using the `java`(e.g.) language, resources will be fetched from
- `https://danzzzz.netlify.app/resources/java/java.configuration.json`
- `https://danzzzz.netlify.app/resources/java/java.tmLanguage.json`
  
For theme resource
- `https://danzzzz.netlify.app/resources/themes/theme-defaults~atom_one_dark.json`

### Where are these resources?
You can find tested resources in [here](https://github.com/KamiC6238/monaco-theme-converter/tree/main/resources), and you only need to upload the resources to your server, and when calling `createEditor`, pass in the server's `domain` name and resource `path`.
