import * as TypeGraphQL from "type-graphql";
import { FindFirstDaftarPengacaraArgs } from "./args/FindFirstDaftarPengacaraArgs";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class FindFirstDaftarPengacaraResolver {
  @TypeGraphQL.Query(_returns => DaftarPengacara, {
    nullable: true
  })
  async findFirstDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDaftarPengacaraArgs): Promise<DaftarPengacara | null> {
    return getPrismaFromContext(ctx).daftarPengacara.findFirst(args);
  }
}
