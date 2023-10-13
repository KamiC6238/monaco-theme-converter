import fs from 'node:fs'

const output = './language-configurations'
const packagePath = './node_modules/@codingame'

const directories = fs.readdirSync(packagePath)
const regex = /monaco-vscode-(\w+(?:-\w+)?)-default-extension/

function fixGrammarLang(lang) {
  switch(lang) {
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
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path) 
  }
}

function start() {
  createFile(output)
  
  directories.forEach(directory => {
    const lang = directory.match(regex)[1]
    const fixedLang = fixLang(lang)
    const filename = `${output}/${fixedLang}`
  
    const commonSource = `${packagePath}/${makeFilename(lang)}`
    const langConfigSource = `${commonSource}/${fixConfigLang(lang)}language-configuration.json`
    const grammarSource = `${commonSource}/${fixGrammarLang(lang)}.tmLanguage.json`
  
    const langeConfigDestination = `${filename}/${fixedLang}-configuration.json`
    const grammarDestination = `${filename}/${fixedLang}.tmLanguage.json`
  
    createFile(filename)
  
    fs.copyFileSync(langConfigSource, langeConfigDestination)
    fs.copyFileSync(grammarSource, grammarDestination)
  })
}

start()