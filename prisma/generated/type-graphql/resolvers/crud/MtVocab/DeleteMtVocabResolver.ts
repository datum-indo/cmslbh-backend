import * as TypeGraphQL from "type-graphql";
import { DeleteMtVocabArgs } from "./args/DeleteMtVocabArgs";
import { MtVocab } from "../../../models/MtVocab";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class DeleteMtVocabResolver {
  @TypeGraphQL.Mutation(_returns => MtVocab, {
    nullable: true
  })
  async deleteMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMtVocabArgs): Promise<MtVocab | null> {
    return getPrismaFromContext(ctx).mtVocab.delete(args);
  }
}
