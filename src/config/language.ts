import { LANGUAGES_ENUM } from '@/config/enum'
import { makeConfigPath } from '@/utils'

export default [
  {
    id: 'java',
    extensions: ['.java', '.jav'],
    aliases: ['Java', 'java'],
    configuration: makeConfigPath(LANGUAGES_ENUM.Java),
  },
]
