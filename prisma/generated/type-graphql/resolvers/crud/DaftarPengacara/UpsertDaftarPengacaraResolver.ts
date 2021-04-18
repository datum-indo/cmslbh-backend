import * as TypeGraphQL from "type-graphql";
import { UpsertDaftarPengacaraArgs } from "./args/UpsertDaftarPengacaraArgs";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class UpsertDaftarPengacaraResolver {
  @TypeGraphQL.Mutation(_returns => DaftarPengacara, {
    nullable: false
  })
  async upsertDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDaftarPengacaraArgs): Promise<DaftarPengacara> {
    return getPrismaFromContext(ctx).daftarPengacara.upsert(args);
  }
}
