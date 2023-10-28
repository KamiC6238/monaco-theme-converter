// export default [
//   {
//     id: 'clojure',
//     aliases: ['Clojure', 'clojure'],
//     extensions: ['.clj', '.cljs', '.cljc', '.cljx', '.clojure', '.edn'],
//     configuration: './clojure-configuration.json',
//     path: './clojure-configuration.json',
//   },
//   {
//     id: 'coffeescript',
//     extensions: ['.coffee', '.cson', '.iced'],
//     aliases: ['CoffeeScript', 'coffeescript', 'coffee'],
//     configuration: './coffeescript-configuration.json',
//     path: './coffeescript-configuration.json',
//   },
//   {
//     id: 'c',
//     extensions: ['.c', '.i'],
//     aliases: ['C', 'c'],
//     configuration: './cpp-configuration.json',
//     path: './cpp-configuration.json',
//   },
//   {
//     id: 'cpp',
//     extensions: [
//       '.cpp',
//       '.cc',
//       '.cxx',
//       '.c++',
//       '.hpp',
//       '.hh',
//       '.hxx',
//       '.h++',
//       '.h',
//       '.ii',
//       '.ino',
//       '.inl',
//       '.ipp',
//       '.ixx',
//       '.tpp',
//       '.txx',
//       '.hpp.in',
//       '.h.in',
//     ],
//     aliases: ['C++', 'Cpp', 'cpp'],
//     configuration: './cpp-configuration.json',
//     path: './cpp-configuration.json',
//   },
//   {
//     id: 'cuda-cpp',
//     extensions: ['.cu', '.cuh'],
//     aliases: ['CUDA C++'],
//     configuration: './cpp-configuration.json',
//     path: './cpp-configuration.json',
//   },
//   {
//     id: 'csharp',
//     extensions: ['.cs', '.csx', '.cake'],
//     aliases: ['C#', 'csharp'],
//     configuration: './csharp-configuration.json',
//     path: './csharp-configuration.json',
//   },
//   {
//     id: 'css',
//     aliases: ['CSS', 'css'],
//     extensions: ['.css'],
//     mimetypes: ['text/css'],
//     configuration: './css-configuration.json',
//     path: './css-configuration.json',
//   },
//   {
//     id: 'dart',
//     extensions: ['.dart'],
//     aliases: ['Dart'],
//     configuration: './dart-configuration.json',
//     path: './dart-configuration.json',
//   },
//   {
//     id: 'fsharp',
//     extensions: ['.fs', '.fsi', '.fsx', '.fsscript'],
//     aliases: ['F#', 'FSharp', 'fsharp'],
//     configuration: './fsharp-configuration.json',
//     path: './fsharp-configuration.json',
//   },
//   {
//     id: 'go',
//     extensions: ['.go'],
//     aliases: ['Go'],
//     configuration: './go-configuration.json',
//     path: './go-configuration.json',
//   },
//   {
//     id: 'groovy',
//     aliases: ['Groovy', 'groovy'],
//     extensions: ['.groovy', '.gvy', '.gradle', '.jenkinsfile', '.nf'],
//     filenames: ['Jenkinsfile'],
//     filenamePatterns: ['Jenkinsfile*'],
//     firstLine: '^#!.*\\bgroovy\\b',
//     configuration: './groovy-configuration.json',
//     path: './groovy-configuration.json',
//   },
//   {
//     id: 'html',
//     extensions: [
//       '.html',
//       '.htm',
//       '.shtml',
//       '.xhtml',
//       '.xht',
//       '.mdoc',
//       '.jsp',
//       '.asp',
//       '.aspx',
//       '.jshtm',
//       '.volt',
//       '.ejs',
//       '.rhtml',
//     ],
//     aliases: ['HTML', 'htm', 'html', 'xhtml'],
//     mimetypes: [
//       'text/html',
//       'text/x-jshtm',
//       'text/template',
//       'text/ng-template',
//       'application/xhtml+xml',
//     ],
//     configuration: './html-configuration.json',
//     path: './html-configuration.json',
//   },
//   {
//     id: 'java',
//     extensions: ['.java', '.jav'],
//     aliases: ['Java', 'java'],
//     configuration: './java-configuration.json',
//     path: './java-configuration.json',
//   },
//   {
//     id: 'javascriptreact',
//     aliases: ['JavaScript JSX', 'JavaScript React', 'jsx'],
//     extensions: ['.jsx'],
//     configuration: './javascript-configuration.json',
//     path: './javascript-configuration.json',
//   },
//   {
//     id: 'javascript',
//     aliases: [
//       'JavaScript',
//       'javascript',
//       'js',
//     ],
//     extensions: [
//       '.js',
//       '.es6',
//       '.mjs',
//       '.cjs',
//       '.pac',
//     ],
//     filenames: [
//       'jakefile',
//     ],
//     firstLine: '^#!.*\\bnode',
//     mimetypes: [
//       'text/javascript',
//     ],
//     configuration: './javascript-configuration.json',
//   },
//   {
//     id: 'jsx-tags',
//     aliases: [],
//     configuration: './javascript-configuration.json',
//     path: './javascript-configuration.json',
//   },
//   {
//     id: 'json',
//     aliases: ['JSON', 'json'],
//     extensions: [
//       '.json',
//       '.bowerrc',
//       '.jscsrc',
//       '.webmanifest',
//       '.js.map',
//       '.css.map',
//       '.ts.map',
//       '.har',
//       '.jslintrc',
//       '.jsonld',
//       '.geojson',
//       '.ipynb',
//       '.vuerc',
//     ],
//     filenames: ['composer.lock', '.watchmanconfig'],
//     mimetypes: ['application/json', 'application/manifest+json'],
//     configuration: './json-configuration.json',
//     path: './json-configuration.json',
//   },
//   {
//     id: 'jsonc',
//     aliases: ['JSON with Comments'],
//     extensions: [
//       '.jsonc',
//       '.eslintrc',
//       '.eslintrc.json',
//       '.jsfmtrc',
//       '.jshintrc',
//       '.swcrc',
//       '.hintrc',
//       '.babelrc',
//     ],
//     filenames: [
//       'babel.config.json',
//       '.babelrc.json',
//       '.ember-cli',
//       'typedoc.json',
//     ],
//     configuration: './json-configuration.json',
//     path: './json-configuration.json',
//   },
//   {
//     id: 'jsonl',
//     aliases: ['JSON Lines'],
//     extensions: ['.jsonl'],
//     filenames: [],
//     configuration: './json-configuration.json',
//     path: './json-configuration.json',
//   },
//   {
//     id: 'snippets',
//     aliases: ['Code Snippets'],
//     extensions: ['.code-snippets'],
//     filenamePatterns: [
//       '**/User/snippets/*.json',
//       '**/User/profiles/*/snippets/*.json',
//     ],
//     configuration: './json-configuration.json',
//     path: './json-configuration.json',
//   },
//   {
//     id: 'julia',
//     aliases: ['Julia', 'julia'],
//     extensions: ['.jl'],
//     firstLine: '^#!\\s*/.*\\bjulia[0-9.-]*\\b',
//     configuration: './julia-configuration.json',
//     path: './julia-configuration.json',
//   },
//   {
//     id: 'juliamarkdown',
//     aliases: ['Julia Markdown', 'juliamarkdown'],
//     extensions: ['.jmd'],
//     configuration: './julia-configuration.json',
//     path: './julia-configuration.json',
//   },
//   {
//     id: 'less',
//     aliases: ['Less', 'less'],
//     extensions: ['.less'],
//     mimetypes: ['text/x-less', 'text/less'],
//     configuration: './less-configuration.json',
//     path: './less-configuration.json',
//   },
//   {
//     id: 'lua',
//     extensions: ['.lua'],
//     aliases: ['Lua', 'lua'],
//     configuration: './lua-configuration.json',
//     path: './lua-configuration.json',
//   },
//   {
//     id: 'perl',
//     aliases: ['Perl', 'perl'],
//     extensions: ['.pl', '.pm', '.pod', '.t', '.PL', '.psgi'],
//     firstLine: '^#!.*\\bperl\\b',
//     configuration: './perl-configuration.json',
//     path: './perl-configuration.json',
//   },
//   {
//     id: 'perl6',
//     aliases: ['Perl 6', 'perl6'],
//     extensions: ['.p6', '.pl6', '.pm6', '.nqp'],
//     firstLine: '(^#!.*\\bperl6\\b)|use\\s+v6',
//     configuration: './perl-configuration.json',
//     path: './perl-configuration.json',
//   },
//   {
//     id: 'php',
//     extensions: ['.php', '.php4', '.php5', '.phtml', '.ctp'],
//     aliases: ['PHP', 'php'],
//     firstLine: '^#!\\s*/.*\\bphp\\b',
//     mimetypes: ['application/x-php'],
//     configuration: './php-configuration.json',
//     path: './php-configuration.json',
//   },
//   {
//     id: 'powershell',
//     extensions: ['.ps1', '.psm1', '.psd1', '.pssc', '.psrc'],
//     aliases: ['PowerShell', 'powershell', 'ps', 'ps1'],
//     firstLine: '^#!\\s*/.*\\bpwsh\\b',
//     configuration: './powershell-configuration.json',
//     path: './powershell-configuration.json',
//   },
//   {
//     id: 'jade',
//     extensions: ['.pug', '.jade'],
//     aliases: ['Pug', 'Jade', 'jade'],
//     configuration: './pug-configuration.json',
//     path: './pug-configuration.json',
//   },
//   {
//     id: 'python',
//     extensions: [
//       '.py',
//       '.rpy',
//       '.pyw',
//       '.cpy',
//       '.gyp',
//       '.gypi',
//       '.pyi',
//       '.ipy',
//       '.pyt',
//     ],
//     aliases: ['Python', 'py'],
//     filenames: ['SConstruct', 'SConscript'],
//     firstLine: '^#!\\s*/?.*\\bpython[0-9.-]*\\b',
//     configuration: './python-configuration.json',
//     path: './python-configuration.json',
//   },
//   {
//     id: 'r',
//     extensions: ['.r', '.rhistory', '.rprofile', '.rt'],
//     aliases: ['R', 'r'],
//     configuration: './r-configuration.json',
//     path: './r-configuration.json',
//   },
//   {
//     id: 'ruby',
//     extensions: [
//       '.rb',
//       '.rbx',
//       '.rjs',
//       '.gemspec',
//       '.rake',
//       '.ru',
//       '.erb',
//       '.podspec',
//       '.rbi',
//     ],
//     filenames: [
//       'rakefile',
//       'gemfile',
//       'guardfile',
//       'podfile',
//       'capfile',
//       'cheffile',
//       'hobofile',
//       'vagrantfile',
//       'appraisals',
//       'rantfile',
//       'berksfile',
//       'berksfile.lock',
//       'thorfile',
//       'puppetfile',
//       'dangerfile',
//       'brewfile',
//       'fastfile',
//       'appfile',
//       'deliverfile',
//       'matchfile',
//       'scanfile',
//       'snapfile',
//       'gymfile',
//     ],
//     aliases: ['Ruby', 'rb'],
//     firstLine: '^#!\\s*/.*\\bruby\\b',
//     configuration: './ruby-configuration.json',
//     path: './ruby-configuration.json',
//   },
//   {
//     id: 'rust',
//     extensions: ['.rs'],
//     aliases: ['Rust', 'rust'],
//     configuration: './rust-configuration.json',
//     path: './rust-configuration.json',
//   },
//   {
//     id: 'scss',
//     aliases: ['SCSS', 'scss'],
//     extensions: ['.scss'],
//     mimetypes: ['text/x-scss', 'text/scss'],
//     configuration: './scss-configuration.json',
//     path: './scss-configuration.json',
//   },
//   {
//     id: 'shaderlab',
//     extensions: ['.shader'],
//     aliases: ['ShaderLab', 'shaderlab'],
//     configuration: './shaderlab-configuration.json',
//     path: './shaderlab-configuration.json',
//   },
//   {
//     id: 'shellscript',
//     aliases: [
//       'Shell Script',
//       'shellscript',
//       'bash',
//       'fish',
//       'sh',
//       'zsh',
//       'ksh',
//       'csh',
//     ],
//     extensions: [
//       '.sh',
//       '.bash',
//       '.bashrc',
//       '.bash_aliases',
//       '.bash_profile',
//       '.bash_login',
//       '.ebuild',
//       '.profile',
//       '.bash_logout',
//       '.xprofile',
//       '.xsession',
//       '.xsessionrc',
//       '.Xsession',
//       '.zsh',
//       '.zshrc',
//       '.zprofile',
//       '.zlogin',
//       '.zlogout',
//       '.zshenv',
//       '.zsh-theme',
//       '.fish',
//       '.ksh',
//       '.csh',
//       '.cshrc',
//       '.tcshrc',
//       '.yashrc',
//       '.yash_profile',
//     ],
//     filenames: [
//       'APKBUILD',
//       'PKGBUILD',
//       '.envrc',
//       '.hushlogin',
//       'zshrc',
//       'zshenv',
//       'zlogin',
//       'zprofile',
//       'zlogout',
//       'bashrc_Apple_Terminal',
//       'zshrc_Apple_Terminal',
//     ],
//     filenamePatterns: ['.env.*'],
//     firstLine:
//       '^#!.*\\b(bash|fish|zsh|sh|ksh|dtksh|pdksh|mksh|ash|dash|yash|sh|csh|jcsh|tcsh|itcsh).*|^#\\s*-\\*-[^*]*mode:\\s*shell-script[^*]*-\\*-',
//     configuration: './shellscript-configuration.json',
//     mimetypes: ['text/x-shellscript'],
//     path: './shellscript-configuration.json',
//   },
//   {
//     id: 'sql',
//     extensions: ['.sql', '.dsql'],
//     aliases: ['SQL'],
//     configuration: './sql-configuration.json',
//     path: './sql-configuration.json',
//   },
//   {
//     id: 'swift',
//     aliases: ['Swift', 'swift'],
//     extensions: ['.swift'],
//     configuration: './swift-configuration.json',
//     path: './swift-configuration.json',
//   },
//   {
//     id: 'typescript',
//     aliases: ['TypeScript', 'ts', 'typescript'],
//     extensions: ['.ts', '.cts', '.mts'],
//     configuration: './typescript-configuration.json',
//     path: './typescript-configuration.json',
//   },
//   {
//     id: 'typescriptreact',
//     aliases: ['TypeScript JSX', 'TypeScript React', 'tsx'],
//     extensions: ['.tsx'],
//     configuration: './typescript-configuration.json',
//     path: './typescript-configuration.json',
//   },
//   {
//     id: 'jsonc',
//     filenames: ['tsconfig.json', 'jsconfig.json'],
//     filenamePatterns: [
//       'tsconfig.*.json',
//       'jsconfig.*.json',
//       'tsconfig-*.json',
//       'jsconfig-*.json',
//     ],
//     configuration: './typescript-configuration.json',
//     path: './typescript-configuration.json',
//   },
//   {
//     id: 'json',
//     extensions: ['.tsbuildinfo'],
//     configuration: './typescript-configuration.json',
//     path: './typescript-configuration.json',
//   },
//   {
//     id: 'vb',
//     extensions: ['.vb', '.brs', '.vbs', '.bas', '.vba'],
//     aliases: ['Visual Basic', 'vb'],
//     configuration: './vb-configuration.json',
//     path: './vb-configuration.json',
//   },
//   {
//     id: 'xml',
//     extensions: [
//       '.xml',
//       '.xsd',
//       '.ascx',
//       '.atom',
//       '.axml',
//       '.axaml',
//       '.bpmn',
//       '.cpt',
//       '.csl',
//       '.csproj',
//       '.csproj.user',
//       '.dita',
//       '.ditamap',
//       '.dtd',
//       '.ent',
//       '.mod',
//       '.dtml',
//       '.fsproj',
//       '.fxml',
//       '.iml',
//       '.isml',
//       '.jmx',
//       '.launch',
//       '.menu',
//       '.mxml',
//       '.nuspec',
//       '.opml',
//       '.owl',
//       '.proj',
//       '.props',
//       '.pt',
//       '.publishsettings',
//       '.pubxml',
//       '.pubxml.user',
//       '.rbxlx',
//       '.rbxmx',
//       '.rdf',
//       '.rng',
//       '.rss',
//       '.shproj',
//       '.storyboard',
//       '.svg',
//       '.targets',
//       '.tld',
//       '.tmx',
//       '.vbproj',
//       '.vbproj.user',
//       '.vcxproj',
//       '.vcxproj.filters',
//       '.wsdl',
//       '.wxi',
//       '.wxl',
//       '.wxs',
//       '.xaml',
//       '.xbl',
//       '.xib',
//       '.xlf',
//       '.xliff',
//       '.xpdl',
//       '.xul',
//       '.xoml',
//     ],
//     firstLine: '(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)',
//     aliases: ['XML', 'xml'],
//     configuration: './xml-configuration.json',
//     path: './xml-configuration.json',
//   },
//   {
//     id: 'xsl',
//     extensions: ['.xsl', '.xslt'],
//     aliases: ['XSL', 'xsl'],
//     configuration: './xml-configuration.json',
//     path: './xml-configuration.json',
//   },
//   {
//     id: 'dockercompose',
//     aliases: ['Compose', 'compose'],
//     filenamePatterns: [
//       'compose.yml',
//       'compose.yaml',
//       'compose.*.yml',
//       'compose.*.yaml',
//       '*docker*compose*.yml',
//       '*docker*compose*.yaml',
//     ],
//     configuration: './yaml-configuration.json',
//     path: './yaml-configuration.json',
//   },
//   {
//     id: 'yaml',
//     aliases: ['YAML', 'yaml'],
//     extensions: ['.yml', '.eyaml', '.eyml', '.yaml', '.cff'],
//     firstLine: '^#cloud-config',
//     configuration: './yaml-configuration.json',
//     path: './yaml-configuration.json',
//   },
// ]

export default [
  {
    id: 'java',
    extensions: ['.java', '.jav'],
    aliases: ['Java', 'java'],
    configuration: './java-configuration.json',
    path: './java-configuration.json',
  },
  {
    id: 'javascript',
    aliases: [
      'JavaScript',
      'javascript',
      'js',
    ],
    extensions: [
      '.js',
      '.es6',
      '.mjs',
      '.cjs',
      '.pac',
    ],
    filenames: [
      'jakefile',
    ],
    firstLine: '^#!.*\\bnode',
    mimetypes: [
      'text/javascript',
    ],
    configuration: './javascript-configuration.json',
  },
  {
    id: 'c',
    extensions: ['.c', '.i'],
    aliases: ['C', 'c'],
    configuration: './c-configuration.json',
    path: './c-configuration.json',
  },
  {
    id: 'cpp',
    extensions: [
      '.cpp',
      '.cc',
      '.cxx',
      '.c++',
      '.hpp',
      '.hh',
      '.hxx',
      '.h++',
      '.h',
      '.ii',
      '.ino',
      '.inl',
      '.ipp',
      '.ixx',
      '.tpp',
      '.txx',
      '.hpp.in',
      '.h.in',
    ],
    aliases: ['C++', 'Cpp', 'cpp'],
    configuration: './cpp-configuration.json',
    path: './cpp-configuration.json',
  },
  {
    id: 'go',
    extensions: ['.go'],
    aliases: ['Go'],
    configuration: './go-configuration.json',
    path: './go-configuration.json',
  },
  {
    id: 'python',
    extensions: [
      '.py',
      '.rpy',
      '.pyw',
      '.cpy',
      '.gyp',
      '.gypi',
      '.pyi',
      '.ipy',
      '.pyt',
    ],
    aliases: ['Python', 'py'],
    filenames: ['SConstruct', 'SConscript'],
    firstLine: '^#!\\s*/?.*\\bpython[0-9.-]*\\b',
    configuration: './python-configuration.json',
    path: './python-configuration.json',
  },
  {
    id: 'typescript',
    aliases: ['TypeScript', 'ts', 'typescript'],
    extensions: ['.ts', '.cts', '.mts'],
    configuration: './typescript-configuration.json',
    path: './typescript-configuration.json',
  },
]
