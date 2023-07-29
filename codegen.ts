
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://result-gen.vercel.app/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "generated/graphql.ts": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
