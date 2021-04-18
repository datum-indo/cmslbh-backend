import * as TypeGraphQL from "type-graphql";
import { DeleteManyDaftarPengacaraArgs } from "./args/DeleteManyDaftarPengacaraArgs";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class DeleteManyDaftarPengacaraResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDaftarPengacaraArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).daftarPengacara.deleteMany(args);
  }
}
