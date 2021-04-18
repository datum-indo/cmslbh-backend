import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { Client } from "../../../models/Client";
import { LogRequest } from "../../../models/LogRequest";
import { Person } from "../../../models/Person";
import { Renamedcase } from "../../../models/Renamedcase";
import { ApplicationClientsArgs } from "./args/ApplicationClientsArgs";
import { ApplicationLogRequestArgs } from "./args/ApplicationLogRequestArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class ApplicationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async case(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).case({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: true
  })
  async wakilId(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any): Promise<Person | null> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).wakilId({});
  }

  @TypeGraphQL.FieldResolver(_type => [Client], {
    nullable: false
  })
  async clients(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ApplicationClientsArgs): Promise<Client[]> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).clients(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LogRequest], {
    nullable: false
  })
  async LogRequest(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ApplicationLogRequestArgs): Promise<LogRequest[]> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).LogRequest(args);
  }
}
