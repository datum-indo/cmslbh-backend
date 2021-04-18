import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { ResolverModule } from '../resolver/resolver.module';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserCrudResolver, UserRelationsResolver } from '../../prisma/generated/type-graphql';
import { ResolverPrismaModule } from '../resolverprisma/resolverprisma.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: '8h',
      },
    }),
    ResolverModule,
    ResolverPrismaModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard, UserCrudResolver, UserRelationsResolver],
})
export class AuthModule { }
