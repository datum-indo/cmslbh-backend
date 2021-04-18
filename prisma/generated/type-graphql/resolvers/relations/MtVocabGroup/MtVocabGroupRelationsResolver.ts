import * as TypeGraphQL from "type-graphql";
import { MtVocab } from "../../../models/MtVocab";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { MtVocabGroupMtvocabsArgs } from "./args/MtVocabGroupMtvocabsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class MtVocabGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [MtVocab], {
    nullable: false
  })
  async mtvocabs(@TypeGraphQL.Root() mtVocabGroup: MtVocabGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MtVocabGroupMtvocabsArgs): Promise<MtVocab[]> {
    return getPrismaFromContext(ctx).mtVocabGroup.findUnique({
      where: {
        kode_list: mtVocabGroup.kode_list,
      },
    }).mtvocabs(args);
  }
}
