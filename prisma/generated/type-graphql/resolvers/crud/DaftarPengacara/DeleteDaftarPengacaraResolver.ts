import * as TypeGraphQL from "type-graphql";
import { DeleteDaftarPengacaraArgs } from "./args/DeleteDaftarPengacaraArgs";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class DeleteDaftarPengacaraResolver {
  @TypeGraphQL.Mutation(_returns => DaftarPengacara, {
    nullable: true
  })
  async deleteDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDaftarPengacaraArgs): Promise<DaftarPengacara | null> {
    return getPrismaFromContext(ctx).daftarPengacara.delete(args);
  }
}
