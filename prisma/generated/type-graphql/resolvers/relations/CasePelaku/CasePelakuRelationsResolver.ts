import * as TypeGraphQL from "type-graphql";
import { CasePelaku } from "../../../models/CasePelaku";
import { Person } from "../../../models/Person";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class CasePelakuRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() casePelaku: CasePelaku, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).casePelaku.findUnique({
      where: {
        id: casePelaku.id,
      },
    }).caseId({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: true
  })
  async personId(@TypeGraphQL.Root() casePelaku: CasePelaku, @TypeGraphQL.Ctx() ctx: any): Promise<Person | null> {
    return getPrismaFromContext(ctx).casePelaku.findUnique({
      where: {
        id: casePelaku.id,
      },
    }).personId({});
  }
}
