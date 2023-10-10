export function makeThemePath(theme: string, needDot = true) {
  return `${needDot ? '.' : ''}/themes/${theme}.json`
}

export function makeConfigurationPath(language: string, needDot = true) {
  return `${needDot ? '.' : ''}/${language}-configuration.json`
}