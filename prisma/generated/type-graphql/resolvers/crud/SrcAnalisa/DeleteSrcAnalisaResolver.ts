import * as TypeGraphQL from "type-graphql";
import { DeleteSrcAnalisaArgs } from "./args/DeleteSrcAnalisaArgs";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class DeleteSrcAnalisaResolver {
  @TypeGraphQL.Mutation(_returns => SrcAnalisa, {
    nullable: true
  })
  async deleteSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSrcAnalisaArgs): Promise<SrcAnalisa | null> {
    return getPrismaFromContext(ctx).srcAnalisa.delete(args);
  }
}
