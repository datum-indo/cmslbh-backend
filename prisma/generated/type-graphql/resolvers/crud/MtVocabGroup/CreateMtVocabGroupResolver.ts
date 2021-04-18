import * as TypeGraphQL from "type-graphql";
import { CreateMtVocabGroupArgs } from "./args/CreateMtVocabGroupArgs";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class CreateMtVocabGroupResolver {
  @TypeGraphQL.Mutation(_returns => MtVocabGroup, {
    nullable: false
  })
  async createMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMtVocabGroupArgs): Promise<MtVocabGroup> {
    return getPrismaFromContext(ctx).mtVocabGroup.create(args);
  }
}
