import * as TypeGraphQL from "type-graphql";
import { FindUniqueMtVocabGroupArgs } from "./args/FindUniqueMtVocabGroupArgs";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class FindUniqueMtVocabGroupResolver {
  @TypeGraphQL.Query(_returns => MtVocabGroup, {
    nullable: true
  })
  async mtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMtVocabGroupArgs): Promise<MtVocabGroup | null> {
    return getPrismaFromContext(ctx).mtVocabGroup.findUnique(args);
  }
}
