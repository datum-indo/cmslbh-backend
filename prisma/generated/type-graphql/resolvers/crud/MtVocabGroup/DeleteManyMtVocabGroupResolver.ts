import * as TypeGraphQL from "type-graphql";
import { DeleteManyMtVocabGroupArgs } from "./args/DeleteManyMtVocabGroupArgs";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class DeleteManyMtVocabGroupResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMtVocabGroupArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).mtVocabGroup.deleteMany(args);
  }
}
