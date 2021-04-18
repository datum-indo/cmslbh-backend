import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { Client } from "../../../models/Client";
import { LogRequest } from "../../../models/LogRequest";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { Network } from "../../../models/Network";
import { Person } from "../../../models/Person";
import { Renamedcase } from "../../../models/Renamedcase";
import { User } from "../../../models/User";
import { LogRequestClientArgs } from "./args/LogRequestClientArgs";
import { LogRequestPpArgs } from "./args/LogRequestPpArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class LogRequestRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Application, {
    nullable: true
  })
  async applicationId(@TypeGraphQL.Root() logRequest: LogRequest, @TypeGraphQL.Ctx() ctx: any): Promise<Application | null> {
    return getPrismaFromContext(ctx).logRequest.findUnique({
      where: {
        ID: logRequest.ID,
      },
    }).applicationId({});
  }

  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() logRequest: LogRequest, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).logRequest.findUnique({
      where: {
        ID: logRequest.ID,
      },
    }).caseId({});
  }

  @TypeGraphQL.FieldResolver(_type => Network, {
    nullable: true
  })
  async networkId(@TypeGraphQL.Root() logRequest: LogRequest, @TypeGraphQL.Ctx() ctx: any): Promise<Network | null> {
    return getPrismaFromContext(ctx).logRequest.findUnique({
      where: {
        ID: logRequest.ID,
      },
    }).networkId({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: true
  })
  async personId(@TypeGraphQL.Root() logRequest: LogRequest, @TypeGraphQL.Ctx() ctx: any): Promise<Person | null> {
    return getPrismaFromContext(ctx).logRequest.findUnique({
      where: {
        ID: logRequest.ID,
      },
    }).personId({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async requestBy(@TypeGraphQL.Root() logRequest: LogRequest, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).logRequest.findUnique({
      where: {
        ID: logRequest.ID,
      },
    }).requestBy({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async requestTo(@TypeGraphQL.Root() logRequest: LogRequest, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).logRequest.findUnique({
      where: {
        ID: logRequest.ID,
      },
    }).requestTo({});
  }

  @TypeGraphQL.FieldResolver(_type => [LogRequestApp], {
    nullable: false
  })
  async pp(@TypeGraphQL.Root() logRequest: LogRequest, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LogRequestPpArgs): Promise<LogRequestApp[]> {
    return getPrismaFromContext(ctx).logRequest.findUnique({
      where: {
        ID: logRequest.ID,
      },
    }).pp(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Client], {
    nullable: false
  })
  async Client(@TypeGraphQL.Root() logRequest: LogRequest, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LogRequestClientArgs): Promise<Client[]> {
    return getPrismaFromContext(ctx).logRequest.findUnique({
      where: {
        ID: logRequest.ID,
      },
    }).Client(args);
  }
}
