import * as TypeGraphQL from "type-graphql";
import { CreateMtVocabArgs } from "./args/CreateMtVocabArgs";
import { MtVocab } from "../../../models/MtVocab";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class CreateMtVocabResolver {
  @TypeGraphQL.Mutation(_returns => MtVocab, {
    nullable: false
  })
  async createMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMtVocabArgs): Promise<MtVocab> {
    return getPrismaFromContext(ctx).mtVocab.create(args);
  }
}
