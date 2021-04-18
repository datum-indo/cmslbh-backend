import * as TypeGraphQL from "type-graphql";
import { UpdateManyMtVocabArgs } from "./args/UpdateManyMtVocabArgs";
import { MtVocab } from "../../../models/MtVocab";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class UpdateManyMtVocabResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMtVocabArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).mtVocab.updateMany(args);
  }
}
