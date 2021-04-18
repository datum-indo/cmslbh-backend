import * as TypeGraphQL from "type-graphql";
import { CaseKorban } from "../../../models/CaseKorban";
import { Person } from "../../../models/Person";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class CaseKorbanRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() caseKorban: CaseKorban, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseKorban.findUnique({
      where: {
        id: caseKorban.id,
      },
    }).caseId({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: true
  })
  async personId(@TypeGraphQL.Root() caseKorban: CaseKorban, @TypeGraphQL.Ctx() ctx: any): Promise<Person | null> {
    return getPrismaFromContext(ctx).caseKorban.findUnique({
      where: {
        id: caseKorban.id,
      },
    }).personId({});
  }
}
