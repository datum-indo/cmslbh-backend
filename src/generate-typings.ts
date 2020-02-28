import {
  GraphQLDefinitionsFactory,
  GqlOptionsFactory,
  GqlModuleOptions,
  GraphQLModule,
  GraphQLFactory,
} from '@nestjs/graphql';
import { join } from 'path';


const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.schema.d.ts'),
  outputAs: 'class',
  debug: false,
    watch: true,
});
