import * as TypeGraphQL from "type-graphql";
import { FindManyDaftarPengacaraArgs } from "./args/FindManyDaftarPengacaraArgs";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class FindManyDaftarPengacaraResolver {
  @TypeGraphQL.Query(_returns => [DaftarPengacara], {
    nullable: false
  })
  async daftarPengacaras(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDaftarPengacaraArgs): Promise<DaftarPengacara[]> {
    return getPrismaFromContext(ctx).daftarPengacara.findMany(args);
  }
}
