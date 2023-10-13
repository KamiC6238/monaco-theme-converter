import fs from 'node:fs'

const output = './language-configurations'
const packagePath = './node_modules/@codingame'

const directories = fs.readdirSync(packagePath)
const regex = /monaco-vscode-(\w+)-default-extension/

function fixGrammarLang(lang) {
  switch(lang) {
    case 'python':
      return 'MagicPython'
    case 'vb':
      return 'asp-vb-net'
    default:
      return lang
  }
}

function fixConfigLang(lang) {
  switch (lang) {
    case 'xml':
      return 'xml.'
    default:
      return ''
  }
}

function makeFilename(lang) {
  return `monaco-vscode-${lang}-default-extension`
}

function copy(src, dest) {
  fs.copyFileSync(src, dest)
}

function start() {
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output) 
  }
  
  directories.forEach(directory => {
    const lang = directory.match(regex)[1]
    const filename = `${output}/${lang}`
  
    const commonSource = `${packagePath}/${makeFilename(lang)}`
    const langConfigSource = `${commonSource}/${fixConfigLang(lang)}language-configuration.json`
    const grammarSource = `${commonSource}/${fixGrammarLang(lang)}.tmLanguage.json`
  
    const langeConfigDestination = `${filename}/${lang}-configuration.json`
    const grammarDestination = `${filename}/${lang}.tmLanguage.json`
  
    if (!fs.existsSync(filename)) {
      fs.mkdirSync(filename)
    }
  
    copy(langConfigSource, langeConfigDestination)
    copy(grammarSource, grammarDestination)
  })
}

start()