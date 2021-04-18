import * as TypeGraphQL from "type-graphql";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { Network } from "../../../models/Network";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransfer)
export class CaseTransferRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Network, {
    nullable: true
  })
  async network(@TypeGraphQL.Root() caseTransfer: CaseTransfer, @TypeGraphQL.Ctx() ctx: any): Promise<Network | null> {
    return getPrismaFromContext(ctx).caseTransfer.findUnique({
      where: {
        id: caseTransfer.id,
      },
    }).network({});
  }

  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async case(@TypeGraphQL.Root() caseTransfer: CaseTransfer, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseTransfer.findUnique({
      where: {
        id: caseTransfer.id,
      },
    }).case({});
  }
}
