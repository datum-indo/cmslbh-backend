import * as TypeGraphQL from "type-graphql";
import { DeleteManyMtVocabArgs } from "./args/DeleteManyMtVocabArgs";
import { MtVocab } from "../../../models/MtVocab";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class DeleteManyMtVocabResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMtVocabArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).mtVocab.deleteMany(args);
  }
}
