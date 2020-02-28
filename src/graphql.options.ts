import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      context: ({ req }) => ({ req }),
      typePaths: ['./**/*.graphql'],
      path: '/graphql',
      installSubscriptionHandlers: true,
      playground: false,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    };
  }
}
