import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { PrismaClient } from "@prisma/client";
import { PrismaModule } from './prisma/prisma.module';
import path from "path";
import { ResolverModule } from './resolver/resolver.module';
import { AuthModule } from './auth/auth.module';
import { MysqlService } from './mysql.service';
import { join } from 'path';
import { TypeGraphQLModule } from "typegraphql-nestjs";
import * as crud from '@generated/type-graphql/resolvers/crud';
import * as relations from '@generated/type-graphql/resolvers/relations';
import { TestController } from './test/test.controller';
import { PrismaService } from './prisma.service';
interface Context {
  prisma: PrismaClient;
}

const RESOLVER = [
  ...Object.values(crud), ...Object.values(relations)
]

const prisma = new PrismaClient();
@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      playground: true,
      introspection: true,
      path: '/graphql',
      emitSchemaFile: true,
      validate: false,
      installSubscriptionHandlers: true,
      context: (): Context => ({ prisma }),
    }),
    // ResolverModule,
    AuthModule,
  ],
  controllers: [TestController, AppController],
  providers: [AppService, ...RESOLVER, PrismaService,MysqlService
  ],
})
// run first time to generate binding
// imports: [
//   GraphQLModule.forRoot({
//     typePaths: ['./**/*.graphql'],
//     definitions: {
//       path: join(process.cwd(), 'src/graphql.schema.d.ts'),
//       outputAs: 'class',
//     },
//     resolverValidationOptions: {
//       requireResolversForResolveType: false,
//     },
//   }),
//   PrismaModule,
//   ResolverModule,
//   AuthModule,
// ],
// controllers: [AppController],
// providers: [AppService,AppService,MysqlService],
// })
export class AppModule { }
// $ graphql get-schema --project database
// $ graphql codegen --project database
