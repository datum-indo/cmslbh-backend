import * as TypeGraphQL from "type-graphql";
import { UpdateDaftarPengacaraArgs } from "./args/UpdateDaftarPengacaraArgs";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class UpdateDaftarPengacaraResolver {
  @TypeGraphQL.Mutation(_returns => DaftarPengacara, {
    nullable: true
  })
  async updateDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDaftarPengacaraArgs): Promise<DaftarPengacara | null> {
    return getPrismaFromContext(ctx).daftarPengacara.update(args);
  }
}
