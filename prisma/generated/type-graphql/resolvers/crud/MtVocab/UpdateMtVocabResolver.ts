import * as TypeGraphQL from "type-graphql";
import { UpdateMtVocabArgs } from "./args/UpdateMtVocabArgs";
import { MtVocab } from "../../../models/MtVocab";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class UpdateMtVocabResolver {
  @TypeGraphQL.Mutation(_returns => MtVocab, {
    nullable: true
  })
  async updateMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMtVocabArgs): Promise<MtVocab | null> {
    return getPrismaFromContext(ctx).mtVocab.update(args);
  }
}
