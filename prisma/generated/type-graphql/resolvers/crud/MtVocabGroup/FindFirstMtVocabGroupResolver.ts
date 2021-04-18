import * as TypeGraphQL from "type-graphql";
import { FindFirstMtVocabGroupArgs } from "./args/FindFirstMtVocabGroupArgs";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class FindFirstMtVocabGroupResolver {
  @TypeGraphQL.Query(_returns => MtVocabGroup, {
    nullable: true
  })
  async findFirstMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMtVocabGroupArgs): Promise<MtVocabGroup | null> {
    return getPrismaFromContext(ctx).mtVocabGroup.findFirst(args);
  }
}
