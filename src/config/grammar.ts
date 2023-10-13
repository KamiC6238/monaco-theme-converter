import { LANGUAGES_ENUM } from '@/config/enum'
import { makeGrammarPath } from '@/utils'

export default [
  {
    language: 'java',
    scopeName: 'source.java',
    path: makeGrammarPath(LANGUAGES_ENUM.Java),
  },
  {
    language: 'json',
    scopeName: 'source.json',
    path: makeGrammarPath(LANGUAGES_ENUM.Json),
  },
]
