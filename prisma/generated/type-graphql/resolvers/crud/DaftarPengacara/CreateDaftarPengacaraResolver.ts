import * as TypeGraphQL from "type-graphql";
import { CreateDaftarPengacaraArgs } from "./args/CreateDaftarPengacaraArgs";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class CreateDaftarPengacaraResolver {
  @TypeGraphQL.Mutation(_returns => DaftarPengacara, {
    nullable: false
  })
  async createDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDaftarPengacaraArgs): Promise<DaftarPengacara> {
    return getPrismaFromContext(ctx).daftarPengacara.create(args);
  }
}
