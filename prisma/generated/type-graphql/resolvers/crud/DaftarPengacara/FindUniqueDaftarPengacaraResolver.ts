import * as TypeGraphQL from "type-graphql";
import { FindUniqueDaftarPengacaraArgs } from "./args/FindUniqueDaftarPengacaraArgs";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class FindUniqueDaftarPengacaraResolver {
  @TypeGraphQL.Query(_returns => DaftarPengacara, {
    nullable: true
  })
  async daftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDaftarPengacaraArgs): Promise<DaftarPengacara | null> {
    return getPrismaFromContext(ctx).daftarPengacara.findUnique(args);
  }
}
