import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CaseConsultationApp } from "../models/CaseConsultationApp";
import { CasePk } from "../models/CasePk";
import { LogRequest } from "../models/LogRequest";
import { LogRequestApp } from "../models/LogRequestApp";
import { Role } from "../models/Role";
import { UserProfile } from "../models/UserProfile";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  position?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rememberToken?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  roles?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userProfileId?: number | null;

  profile?: UserProfile | null;

  CaseConsultationApp?: CaseConsultationApp[];

  CasePk?: CasePk[];

  logRequestBy?: LogRequest[];

  logRequestTo?: LogRequest[];

  LogRequestApp?: LogRequestApp[];

  roles_type?: Role[];
}
