import * as TypeGraphQL from "type-graphql";
import { FindFirstMtVocabArgs } from "./args/FindFirstMtVocabArgs";
import { MtVocab } from "../../../models/MtVocab";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class FindFirstMtVocabResolver {
  @TypeGraphQL.Query(_returns => MtVocab, {
    nullable: true
  })
  async findFirstMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMtVocabArgs): Promise<MtVocab | null> {
    return getPrismaFromContext(ctx).mtVocab.findFirst(args);
  }
}
