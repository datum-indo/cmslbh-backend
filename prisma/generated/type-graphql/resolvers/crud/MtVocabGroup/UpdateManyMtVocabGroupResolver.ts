import * as TypeGraphQL from "type-graphql";
import { UpdateManyMtVocabGroupArgs } from "./args/UpdateManyMtVocabGroupArgs";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class UpdateManyMtVocabGroupResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMtVocabGroupArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).mtVocabGroup.updateMany(args);
  }
}
