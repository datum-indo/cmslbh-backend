import * as TypeGraphQL from "type-graphql";
import { FindUniqueMtVocabArgs } from "./args/FindUniqueMtVocabArgs";
import { MtVocab } from "../../../models/MtVocab";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class FindUniqueMtVocabResolver {
  @TypeGraphQL.Query(_returns => MtVocab, {
    nullable: true
  })
  async mtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMtVocabArgs): Promise<MtVocab | null> {
    return getPrismaFromContext(ctx).mtVocab.findUnique(args);
  }
}
