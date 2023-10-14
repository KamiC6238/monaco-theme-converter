import fs from "node:fs";

const output = "./src/resources";
const packagePath = "./node_modules/@codingame";

const directories = fs.readdirSync(packagePath);
const regex = /monaco-vscode-(\w+(?:-\w+)?)-default-extension/;

const langExtensions = [];
const langGrammars = [];

let manifest;

function fixGrammarLang(lang) {
  switch (lang) {
    case "python":
      return "MagicPython";
    case "vb":
      return "asp-vb-net";
    case "javascript":
      return "JavaScript";
    case "shellscript":
      return "shell-unix-bash";
    case "typescript-basics":
      return "TypeScript";
    case "cuda-cpp":
      return "cpp";
    default:
      return lang;
  }
}

function fixConfigLang(lang) {
  switch (lang) {
    case "xml":
      return "xml.";
    case "javascript":
      return "javascript-";
    case "perl":
      return "perl.";
    default:
      return "";
  }
}

function fixLang(lang) {
  switch (lang) {
    case "typescript-basics":
      return "typescript";
    case "cuda-cpp":
      return "cpp";
    default:
      return lang;
  }
}

function makeFilename(lang) {
  return `monaco-vscode-${lang}-default-extension`;
}

function createFile(path) {
  if (!fs.existsSync(path)) fs.mkdirSync(path);
}

function setManifest(manifest) {
  return `
    function setManifest() {
      manifest = ${manifest}
    }

    setManifest()
  `;
}

function fixGrammarPath(manifest, lang) {
  for (const grammar of manifest.contributes.grammars) {
    const { language, scopeName } = grammar;

    langGrammars.push({
      language: fixLang(language || lang),
      scopeName,
      path: `./${lang}.tmLanguage.json`,
      configuration: `./${lang}.tmLanguage.json`,
    });
  }
}

function fixConfigPath(manifest, lang) {
  for (const language of manifest.contributes.languages) {
    const fixedLang = fixLang(lang);

    langExtensions.push({
      ...language,
      configuration: `./${fixedLang}-configuration.json`,
      path: `./${fixedLang}-configuration.json`,
    });
  }
}

function makeExportDefault(source) {
  return `export default ${source}`;
}

async function start() {
  createFile(output);

  for (const directory of directories) {
    const lang = directory.match(regex)[1];
    const fixedLang = fixLang(lang);
    const filename = `${output}/${fixedLang}`;

    const commonSrc = `${packagePath}/${makeFilename(lang)}`;
    const langConfigSrc = `${commonSrc}/${fixConfigLang(
      lang
    )}language-configuration.json`;
    const grammarSrc = `${commonSrc}/${fixGrammarLang(lang)}.tmLanguage.json`;

    const langeConfigDest = `${filename}/${fixedLang}-configuration.json`;
    const grammarDest = `${filename}/${fixedLang}.tmLanguage.json`;

    createFile(filename);

    const fileContents = fs.readFileSync(`${commonSrc}/index.js`, "utf-8");

    const match = fileContents.match(/var manifest = ({.*?});/);

    // eslint-disable-next-line no-eval
    eval(setManifest(match[1]));

    fixConfigPath(manifest, lang);
    fixGrammarPath(manifest, lang);

    fs.copyFileSync(langConfigSrc, langeConfigDest);
    fs.copyFileSync(grammarSrc, grammarDest);
  }

  fs.writeFileSync(
    "./src/config/grammar.ts",
    makeExportDefault(JSON.stringify(langGrammars)),
    "utf-8"
  );
  fs.writeFileSync(
    "./src/config/language.ts",
    makeExportDefault(JSON.stringify(langExtensions)),
    "utf-8"
  );
}

start();
