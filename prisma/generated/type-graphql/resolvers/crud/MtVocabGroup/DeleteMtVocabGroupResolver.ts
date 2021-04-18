import * as TypeGraphQL from "type-graphql";
import { DeleteMtVocabGroupArgs } from "./args/DeleteMtVocabGroupArgs";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class DeleteMtVocabGroupResolver {
  @TypeGraphQL.Mutation(_returns => MtVocabGroup, {
    nullable: true
  })
  async deleteMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMtVocabGroupArgs): Promise<MtVocabGroup | null> {
    return getPrismaFromContext(ctx).mtVocabGroup.delete(args);
  }
}
