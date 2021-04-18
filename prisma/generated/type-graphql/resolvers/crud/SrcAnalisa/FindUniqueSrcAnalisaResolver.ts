import * as TypeGraphQL from "type-graphql";
import { FindUniqueSrcAnalisaArgs } from "./args/FindUniqueSrcAnalisaArgs";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class FindUniqueSrcAnalisaResolver {
  @TypeGraphQL.Query(_returns => SrcAnalisa, {
    nullable: true
  })
  async srcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueSrcAnalisaArgs): Promise<SrcAnalisa | null> {
    return getPrismaFromContext(ctx).srcAnalisa.findUnique(args);
  }
}
