import * as TypeGraphQL from "type-graphql";
import { MtVocab } from "../../../models/MtVocab";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class MtVocabRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => MtVocabGroup, {
    nullable: true
  })
  async kode_list(@TypeGraphQL.Root() mtVocab: MtVocab, @TypeGraphQL.Ctx() ctx: any): Promise<MtVocabGroup | null> {
    return getPrismaFromContext(ctx).mtVocab.findUnique({
      where: {
        KODE: mtVocab.KODE,
      },
    }).kode_list({});
  }
}
