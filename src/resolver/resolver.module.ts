import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PersonResolver } from './person.resolver';
import { CaseResolver } from './case.resolver';
import { ClientResolver } from './client.resolver';
import { ApplicationResolver } from './application.resolver';
import { UserResolver } from './users.resolver';
import { MTVocabResolver } from './mtvocab.resolver';
import { RolesTypeResolver } from './rolestype.resolver';
import { RoleResolver } from './role.resolver';
import { LogRequestResolver } from './logrequest.resolver';
import { NetworkResolver } from './network.resolver';
import { CaseProgressActivityResolver } from './caseprogressactivity.resolver';
import { KorbanResolver } from './korban.resolver';
import { PelakuResolver } from './pelaku.resolver';
import { ViolatedRightResolver } from './violatedright.resolver';
import { ClassificationResolver } from './caseclassification.resolver';
import { CasePkResolver } from './casepk.resolver';
import { ConsultationResolver } from './consultations.resolver';
import { CaseProgressActivityLitResolver } from './activitylit.resolver';
import { CaseProgressActivityNonLitResolver } from './activitynonlit.resolver';
import { IssueResolver } from './issue.resolver';

const RESOLVER = [
  PersonResolver,
  CaseResolver,
  ClientResolver,
  ApplicationResolver,
  UserResolver,
  MTVocabResolver,
  RolesTypeResolver,
  RoleResolver,
  LogRequestResolver,
  NetworkResolver,
  CaseProgressActivityResolver,
  KorbanResolver,
  PelakuResolver,
  ViolatedRightResolver,
  ClassificationResolver,
  CasePkResolver,
  ConsultationResolver,
  CaseProgressActivityLitResolver,
  CaseProgressActivityNonLitResolver,
  IssueResolver,
];

@Module({
  providers: [...RESOLVER],
  exports: [...RESOLVER],
  imports: [PrismaModule],
})
export class ResolverModule {}
