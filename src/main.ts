
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import onigFile from 'vscode-oniguruma/release/onig.wasm?url';
import getConfigurationServiceOverride from 'vscode/service-override/configuration';
import getDialogsServiceOverride from 'vscode/service-override/dialogs';
import getLanguageConfigurationServiceOverride from 'vscode/service-override/languageConfiguration';
import getLanguagesServiceOverride from 'vscode/service-override/languages';
import getTextmateServiceOverride from 'vscode/service-override/textmate';
import getThemeServiceOverride from 'vscode/service-override/theme';
import { StandaloneServices } from 'vscode/services';
import './index.css';

StandaloneServices.initialize({
  // 删掉这个 dialog server 会导致 server 循环加载，不知道为什么
	...getDialogsServiceOverride(),
	...getConfigurationServiceOverride(),
	...getTextmateServiceOverride(async () => {
		const response = await fetch(onigFile)
		return await response.arrayBuffer()
	}),
	...getThemeServiceOverride(),
	...getLanguageConfigurationServiceOverride(),
	...getLanguagesServiceOverride()
})

const editor = monaco.editor.create(document.getElementById('app')!, {
  language: 'javascript',
  theme: 'vs-dark'
})