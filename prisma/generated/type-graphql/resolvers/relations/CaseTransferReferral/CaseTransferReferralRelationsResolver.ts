import * as TypeGraphQL from "type-graphql";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class CaseTransferReferralRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() caseTransferReferral: CaseTransferReferral, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseTransferReferral.findUnique({
      where: {
        id: caseTransferReferral.id,
      },
    }).caseId({});
  }
}
