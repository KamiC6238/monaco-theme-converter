import { LANGUAGES_ENUM } from '@/config/enum'
import { makeConfigPath } from '@/utils'

export default [
  {
    id: 'java',
    extensions: ['.java', '.jav'],
    aliases: ['Java', 'java'],
    configuration: makeConfigPath(LANGUAGES_ENUM.Java),
  },
  {
    id: 'json',
    aliases: [
      'JSON',
      'json',
    ],
    extensions: [
      '.json',
      '.bowerrc',
      '.jscsrc',
      '.webmanifest',
      '.js.map',
      '.css.map',
      '.ts.map',
      '.har',
      '.jslintrc',
      '.jsonld',
      '.geojson',
      '.ipynb',
      '.vuerc',
    ],
    configuration: makeConfigPath(LANGUAGES_ENUM.Json),
  },
]
