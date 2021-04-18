import * as TypeGraphQL from "type-graphql";
import { UpsertMtVocabArgs } from "./args/UpsertMtVocabArgs";
import { MtVocab } from "../../../models/MtVocab";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class UpsertMtVocabResolver {
  @TypeGraphQL.Mutation(_returns => MtVocab, {
    nullable: false
  })
  async upsertMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMtVocabArgs): Promise<MtVocab> {
    return getPrismaFromContext(ctx).mtVocab.upsert(args);
  }
}
