import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { Client } from "../../../models/Client";
import { LogRequest } from "../../../models/LogRequest";
import { Person } from "../../../models/Person";
import { ClientLogRequestArgs } from "./args/ClientLogRequestArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class ClientRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Application, {
    nullable: true
  })
  async applicationId(@TypeGraphQL.Root() client: Client, @TypeGraphQL.Ctx() ctx: any): Promise<Application | null> {
    return getPrismaFromContext(ctx).client.findUnique({
      where: {
        id: client.id,
      },
    }).applicationId({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: true
  })
  async personId(@TypeGraphQL.Root() client: Client, @TypeGraphQL.Ctx() ctx: any): Promise<Person | null> {
    return getPrismaFromContext(ctx).client.findUnique({
      where: {
        id: client.id,
      },
    }).personId({});
  }

  @TypeGraphQL.FieldResolver(_type => [LogRequest], {
    nullable: false
  })
  async LogRequest(@TypeGraphQL.Root() client: Client, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ClientLogRequestArgs): Promise<LogRequest[]> {
    return getPrismaFromContext(ctx).client.findUnique({
      where: {
        id: client.id,
      },
    }).LogRequest(args);
  }
}
