import type { GenerateServiceProps } from 'openapi-ts-request'

export default ([
  {
    schemaPath: 'http://127.0.0.1:3000/api/api/ui/json',
    serversPath: './src/service',
    requestLibPath: `import request from '@/http/vue-query';\n import { CustomRequestOptions_ } from '@/http/types';`,
    requestOptionsType: 'CustomRequestOptions',
    isGenReactQuery: false,
    isTranslateToEnglishTag: true,
    isGenJavaScript: false,
  },
]) as GenerateServiceProps[]
