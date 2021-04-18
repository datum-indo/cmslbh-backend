import * as TypeGraphQL from "type-graphql";
import { FindManyMtVocabArgs } from "./args/FindManyMtVocabArgs";
import { MtVocab } from "../../../models/MtVocab";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class FindManyMtVocabResolver {
  @TypeGraphQL.Query(_returns => [MtVocab], {
    nullable: false
  })
  async mtVocabs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMtVocabArgs): Promise<MtVocab[]> {
    return getPrismaFromContext(ctx).mtVocab.findMany(args);
  }
}
