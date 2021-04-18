import * as TypeGraphQL from "type-graphql";
import { UpdateManyDaftarPengacaraArgs } from "./args/UpdateManyDaftarPengacaraArgs";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class UpdateManyDaftarPengacaraResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDaftarPengacaraArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).daftarPengacara.updateMany(args);
  }
}
