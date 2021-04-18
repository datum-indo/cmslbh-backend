import * as TypeGraphQL from "type-graphql";
import { LogRequest } from "../../../models/LogRequest";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class LogRequestAppRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async appConsultation(@TypeGraphQL.Root() logRequestApp: LogRequestApp, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).logRequestApp.findUnique({
      where: {
        id: logRequestApp.id,
      },
    }).appConsultation({});
  }

  @TypeGraphQL.FieldResolver(_type => LogRequest, {
    nullable: true
  })
  async logRequestId(@TypeGraphQL.Root() logRequestApp: LogRequestApp, @TypeGraphQL.Ctx() ctx: any): Promise<LogRequest | null> {
    return getPrismaFromContext(ctx).logRequestApp.findUnique({
      where: {
        id: logRequestApp.id,
      },
    }).logRequestId({});
  }
}
