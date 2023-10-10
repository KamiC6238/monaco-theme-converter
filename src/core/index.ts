
import '@/index.css';
import onigFile from 'vscode-oniguruma/release/onig.wasm?url';
import getConfigurationServiceOverride from 'vscode/service-override/configuration';
import getDialogsServiceOverride from 'vscode/service-override/dialogs';
import getLanguageConfigurationServiceOverride, { setLanguageConfiguration } from 'vscode/service-override/languageConfiguration';
import getLanguagesServiceOverride, { setLanguages } from 'vscode/service-override/languages';
import getTextmateServiceOverride, { setGrammars } from 'vscode/service-override/textmate';
import getThemeServiceOverride, { IThemeExtensionPoint, setDefaultThemes } from 'vscode/service-override/theme';
import { StandaloneServices } from 'vscode/services';

import { ThemeConfigList, Themes } from '@/config';
import grammars from '@/grammars';
import languages from '@/languages';
import { makeThemePath } from '@/utils';

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

const themeLoader = Object.values(Themes).reduce((res, cur) => {
  res[makeThemePath(cur, false)] = async () => (await import(`../themes/theme-defaults~${cur}.json?raw`)).default
  return res
}, {} as Record<string, () => Promise<string>>)

setDefaultThemes(
  ThemeConfigList as IThemeExtensionPoint[],
  async (theme) => themeLoader[theme.path.slice(1)]!()
)

setLanguages(languages)

setLanguageConfiguration(`/java-configuration.json`, async () => {
	return (await import('../resources/java-language-configuration.json?raw')).default
})

setGrammars(grammars, async (grammar) => {
	switch (grammar.language) {
		case 'java': return (await import('../resources/java.tmLanguage.json?raw')).default
	}
	throw new Error('grammar not found')
})
