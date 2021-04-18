import * as TypeGraphQL from "type-graphql";
import { UpdateSrcAnalisaArgs } from "./args/UpdateSrcAnalisaArgs";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class UpdateSrcAnalisaResolver {
  @TypeGraphQL.Mutation(_returns => SrcAnalisa, {
    nullable: true
  })
  async updateSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSrcAnalisaArgs): Promise<SrcAnalisa | null> {
    return getPrismaFromContext(ctx).srcAnalisa.update(args);
  }
}
