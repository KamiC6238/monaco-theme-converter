import '@/core';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const editor = monaco.editor.create(document.getElementById('app')!, {
  language: 'java',
})

editor.updateOptions({
  theme: 'vs-dark vscode-theme-defaults-themes-dark_plus-json'
})