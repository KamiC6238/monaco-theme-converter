import { makeTheme } from '@/config';
import '@/core';
import { IThemes } from '@/types';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export default class MonacoThemeConverter {
  private editor: monaco.editor.IStandaloneCodeEditor | null = null;
  
  constructor(editor: monaco.editor.IStandaloneCodeEditor) {
    this.editor = editor
  }

  setTheme(theme: keyof IThemes) {
    if (!this.editor) return;
    this.editor.updateOptions({
      theme: makeTheme(theme)
    })
  }
}
