import * as TypeGraphQL from "type-graphql";
import { UpsertMtVocabGroupArgs } from "./args/UpsertMtVocabGroupArgs";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class UpsertMtVocabGroupResolver {
  @TypeGraphQL.Mutation(_returns => MtVocabGroup, {
    nullable: false
  })
  async upsertMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMtVocabGroupArgs): Promise<MtVocabGroup> {
    return getPrismaFromContext(ctx).mtVocabGroup.upsert(args);
  }
}
