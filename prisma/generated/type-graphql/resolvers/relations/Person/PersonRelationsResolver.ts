import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { CaseKorban } from "../../../models/CaseKorban";
import { CasePelaku } from "../../../models/CasePelaku";
import { CaseReferral } from "../../../models/CaseReferral";
import { Client } from "../../../models/Client";
import { LogRequest } from "../../../models/LogRequest";
import { Person } from "../../../models/Person";
import { PersonDocument } from "../../../models/PersonDocument";
import { PersonApplicationsArgs } from "./args/PersonApplicationsArgs";
import { PersonCaseKorbanArgs } from "./args/PersonCaseKorbanArgs";
import { PersonCasePelakuArgs } from "./args/PersonCasePelakuArgs";
import { PersonCaseReferralArgs } from "./args/PersonCaseReferralArgs";
import { PersonClientsArgs } from "./args/PersonClientsArgs";
import { PersonDocumentsArgs } from "./args/PersonDocumentsArgs";
import { PersonLogRequestArgs } from "./args/PersonLogRequestArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class PersonRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Application], {
    nullable: false
  })
  async applications(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonApplicationsArgs): Promise<Application[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).applications(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseReferral], {
    nullable: false
  })
  async CaseReferral(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonCaseReferralArgs): Promise<CaseReferral[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).CaseReferral(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseKorban], {
    nullable: false
  })
  async CaseKorban(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonCaseKorbanArgs): Promise<CaseKorban[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).CaseKorban(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CasePelaku], {
    nullable: false
  })
  async CasePelaku(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonCasePelakuArgs): Promise<CasePelaku[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).CasePelaku(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Client], {
    nullable: false
  })
  async clients(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonClientsArgs): Promise<Client[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).clients(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LogRequest], {
    nullable: false
  })
  async LogRequest(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonLogRequestArgs): Promise<LogRequest[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).LogRequest(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PersonDocument], {
    nullable: false
  })
  async documents(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonDocumentsArgs): Promise<PersonDocument[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).documents(args);
  }
}
