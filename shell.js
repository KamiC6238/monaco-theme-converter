import fs from 'node:fs'

const output = './src/resources'
const packagePath = './node_modules/@codingame'

const directories = fs.readdirSync(packagePath)
const regex = /monaco-vscode-(\w+(?:-\w+)?)-default-extension/

const langExtensions = []
const langGrammars = []

let manifest

function fixGrammarLang(lang) {
  switch (lang) {
    case 'python':
      return 'MagicPython'
    case 'vb':
      return 'asp-vb-net'
    case 'javascript':
      return 'JavaScript'
    case 'shellscript':
      return 'shell-unix-bash'
    case 'typescript-basics':
      return 'TypeScript'
    default:
      return lang
  }
}

function fixConfigLang(lang) {
  switch (lang) {
    case 'xml':
      return 'xml.'
    case 'javascript':
      return 'javascript-'
    case 'perl':
      return 'perl.'
    default:
      return ''
  }
}

function fixLang(lang) {
  switch (lang) {
    case 'typescript-basics':
      return 'typescript'
    default:
      return lang
  }
}

function makeFilename(lang) {
  return `monaco-vscode-${lang}-default-extension`
}

function createFile(path) {
  if (!fs.existsSync(path))
    fs.mkdirSync(path)
}

function setManifest(manifest) {
  return `
    function setManifest() {
      manifest = ${manifest}
    }

    setManifest()
  `
}

function fixGrammarPath(manifest, lang) {
  langGrammars.push({
    ...manifest.contributes.grammars[0],
    path: `./${lang}.tmLanguage.json`,
  })
}

function fixConfigPath(manifest, lang) {
  langExtensions.push({
    ...manifest.contributes.languages[0],
    configuration: `./${lang}-configuration.json`,
    path: `./${lang}-configuration.json`,
  })
}

function makeExportDefault(source) {
  return `export default ${source}`
}

async function start() {
  createFile(output)

  for (const directory of directories) {
    const lang = directory.match(regex)[1]
    const fixedLang = fixLang(lang)
    const filename = `${output}/${fixedLang}`

    const commonSrc = `${packagePath}/${makeFilename(lang)}`
    const langConfigSrc = `${commonSrc}/${fixConfigLang(lang)}language-configuration.json`
    const grammarSrc = `${commonSrc}/${fixGrammarLang(lang)}.tmLanguage.json`

    const langeConfigDest = `${filename}/${fixedLang}-configuration.json`
    const grammarDest = `${filename}/${fixedLang}.tmLanguage.json`

    createFile(filename)

    const fileContents = fs.readFileSync(`${commonSrc}/index.js`, 'utf-8')

    const match = fileContents.match(/var manifest = ({.*?});/)

    // eslint-disable-next-line no-eval
    eval(setManifest(match[1]))

    fixConfigPath(manifest, fixedLang)
    fixGrammarPath(manifest, fixedLang)

    fs.copyFileSync(langConfigSrc, langeConfigDest)
    fs.copyFileSync(grammarSrc, grammarDest)
  }

  fs.writeFileSync('./src/config/grammar.ts', makeExportDefault(JSON.stringify(langGrammars)), 'utf-8')
  fs.writeFileSync('./src/config/language.ts', makeExportDefault(JSON.stringify(langExtensions)), 'utf-8')
}

start()
