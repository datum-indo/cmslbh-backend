import * as TypeGraphQL from "type-graphql";
import { FindManySrcAnalisaArgs } from "./args/FindManySrcAnalisaArgs";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class FindManySrcAnalisaResolver {
  @TypeGraphQL.Query(_returns => [SrcAnalisa], {
    nullable: false
  })
  async srcAnalisas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySrcAnalisaArgs): Promise<SrcAnalisa[]> {
    return getPrismaFromContext(ctx).srcAnalisa.findMany(args);
  }
}
