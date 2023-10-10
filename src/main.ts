
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import onigFile from 'vscode-oniguruma/release/onig.wasm?url';
import getConfigurationServiceOverride from 'vscode/service-override/configuration';
import getDialogsServiceOverride from 'vscode/service-override/dialogs';
import getLanguageConfigurationServiceOverride, { setLanguageConfiguration } from 'vscode/service-override/languageConfiguration';
import getLanguagesServiceOverride, { setLanguages } from 'vscode/service-override/languages';
import getTextmateServiceOverride, { setGrammars } from 'vscode/service-override/textmate';
import getThemeServiceOverride, { IThemeExtensionPoint, setDefaultThemes } from 'vscode/service-override/theme';
import { StandaloneServices } from 'vscode/services';
import './index.css';
import themes from './resources/themes/themes.json';

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

const loader = {
	'/themes/dark_plus.json': async () => (await import('./resources/themes/theme-defaults~dark_plus.json?raw')).default,
	'/themes/dark_vs.json': async () => (await import('./resources/themes/theme-defaults~dark_vs.json?raw')).default,
} as Partial<Record<string, () => Promise<string>>>

setDefaultThemes(themes as IThemeExtensionPoint[], async (theme) => loader[theme.path.slice(1)]!())

setLanguages([{
	id: 'java',
	extensions: [
		'.java',
		'.jav'
	],
	aliases: [
		'Java',
		'java'
	],
	configuration: `./java-configuration.json`
}])

setLanguageConfiguration(`/java-configuration.json`, async () => {
	return (await import('./resources/java-language-configuration.json?raw')).default
})

setGrammars([{
	language: 'java',
	scopeName: 'source.java',
	path: './java-grammar.json'
}], async (grammar) => {
	switch (grammar.language) {
		case 'java': return (await import('./resources/java.tmLanguage.json?raw')).default
	}
	throw new Error('grammar not found')
})

const editor = monaco.editor.create(document.getElementById('app')!, {
  language: 'java',
})

editor.updateOptions({
  theme: 'vs-dark vscode-theme-defaults-themes-dark_plus-json'
})