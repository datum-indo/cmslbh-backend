import * as TypeGraphQL from "type-graphql";
import { UpdateMtVocabGroupArgs } from "./args/UpdateMtVocabGroupArgs";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class UpdateMtVocabGroupResolver {
  @TypeGraphQL.Mutation(_returns => MtVocabGroup, {
    nullable: true
  })
  async updateMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMtVocabGroupArgs): Promise<MtVocabGroup | null> {
    return getPrismaFromContext(ctx).mtVocabGroup.update(args);
  }
}
