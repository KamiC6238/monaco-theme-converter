import getTextmateServiceOverride from '@codingame/monaco-vscode-textmate-service-override';
import getThemeServiceOverride from '@codingame/monaco-vscode-theme-service-override';
import { createEditor } from 'tiny-monaco';
import { initialize } from 'vscode/services';
import './index.css';

await initialize({
  ...getThemeServiceOverride(),
  ...getTextmateServiceOverride(),
})


const editor = createEditor(document.getElementById('app')!, {})