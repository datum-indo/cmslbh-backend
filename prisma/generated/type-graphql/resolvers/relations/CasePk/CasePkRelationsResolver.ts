import * as TypeGraphQL from "type-graphql";
import { CasePk } from "../../../models/CasePk";
import { Renamedcase } from "../../../models/Renamedcase";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class CasePkRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async ppPendamping(@TypeGraphQL.Root() casePk: CasePk, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).casePk.findUnique({
      where: {
        id: casePk.id,
      },
    }).ppPendamping({});
  }

  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async case(@TypeGraphQL.Root() casePk: CasePk, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).casePk.findUnique({
      where: {
        id: casePk.id,
      },
    }).case({});
  }
}
