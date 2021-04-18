import * as TypeGraphQL from "type-graphql";
import { CaseReferral } from "../../../models/CaseReferral";
import { Network } from "../../../models/Network";
import { Person } from "../../../models/Person";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class CaseReferralRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async case(@TypeGraphQL.Root() caseReferral: CaseReferral, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseReferral.findUnique({
      where: {
        id: caseReferral.id,
      },
    }).case({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: true
  })
  async client(@TypeGraphQL.Root() caseReferral: CaseReferral, @TypeGraphQL.Ctx() ctx: any): Promise<Person | null> {
    return getPrismaFromContext(ctx).caseReferral.findUnique({
      where: {
        id: caseReferral.id,
      },
    }).client({});
  }

  @TypeGraphQL.FieldResolver(_type => Network, {
    nullable: true
  })
  async network(@TypeGraphQL.Root() caseReferral: CaseReferral, @TypeGraphQL.Ctx() ctx: any): Promise<Network | null> {
    return getPrismaFromContext(ctx).caseReferral.findUnique({
      where: {
        id: caseReferral.id,
      },
    }).network({});
  }
}
