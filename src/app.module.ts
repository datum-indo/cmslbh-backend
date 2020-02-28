import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { PrismaModule } from './prisma/prisma.module';
import { ResolverModule } from './resolver/resolver.module';
import { AuthModule } from './auth/auth.module';
import { MysqlService } from './mysql.service';
import { join } from 'path';
@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    PrismaModule,
    ResolverModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, MysqlService],
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
export class AppModule {}
// $ graphql get-schema --project database
// $ graphql codegen --project database
