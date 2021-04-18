import * as TypeGraphQL from "type-graphql";
import { FindManyMtVocabGroupArgs } from "./args/FindManyMtVocabGroupArgs";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class FindManyMtVocabGroupResolver {
  @TypeGraphQL.Query(_returns => [MtVocabGroup], {
    nullable: false
  })
  async mtVocabGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMtVocabGroupArgs): Promise<MtVocabGroup[]> {
    return getPrismaFromContext(ctx).mtVocabGroup.findMany(args);
  }
}
