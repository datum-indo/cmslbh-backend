import * as TypeGraphQL from "type-graphql";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { CasePk } from "../../../models/CasePk";
import { LogRequest } from "../../../models/LogRequest";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserCaseConsultationAppArgs } from "./args/UserCaseConsultationAppArgs";
import { UserCasePkArgs } from "./args/UserCasePkArgs";
import { UserLogRequestAppArgs } from "./args/UserLogRequestAppArgs";
import { UserLogRequestByArgs } from "./args/UserLogRequestByArgs";
import { UserLogRequestToArgs } from "./args/UserLogRequestToArgs";
import { UserRoles_typeArgs } from "./args/UserRoles_typeArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [CaseConsultationApp], {
    nullable: false
  })
  async CaseConsultationApp(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCaseConsultationAppArgs): Promise<CaseConsultationApp[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).CaseConsultationApp(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CasePk], {
    nullable: false
  })
  async CasePk(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCasePkArgs): Promise<CasePk[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).CasePk(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LogRequest], {
    nullable: false
  })
  async logRequestBy(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLogRequestByArgs): Promise<LogRequest[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).logRequestBy(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LogRequest], {
    nullable: false
  })
  async logRequestTo(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLogRequestToArgs): Promise<LogRequest[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).logRequestTo(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LogRequestApp], {
    nullable: false
  })
  async LogRequestApp(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLogRequestAppArgs): Promise<LogRequestApp[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).LogRequestApp(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Role], {
    nullable: false
  })
  async roles_type(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRoles_typeArgs): Promise<Role[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).roles_type(args);
  }
}
