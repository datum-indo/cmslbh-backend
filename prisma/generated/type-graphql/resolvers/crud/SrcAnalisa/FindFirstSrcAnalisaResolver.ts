import * as TypeGraphQL from "type-graphql";
import { FindFirstSrcAnalisaArgs } from "./args/FindFirstSrcAnalisaArgs";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class FindFirstSrcAnalisaResolver {
  @TypeGraphQL.Query(_returns => SrcAnalisa, {
    nullable: true
  })
  async findFirstSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSrcAnalisaArgs): Promise<SrcAnalisa | null> {
    return getPrismaFromContext(ctx).srcAnalisa.findFirst(args);
  }
}
