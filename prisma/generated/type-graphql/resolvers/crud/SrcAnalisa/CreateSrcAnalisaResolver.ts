import * as TypeGraphQL from "type-graphql";
import { CreateSrcAnalisaArgs } from "./args/CreateSrcAnalisaArgs";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class CreateSrcAnalisaResolver {
  @TypeGraphQL.Mutation(_returns => SrcAnalisa, {
    nullable: false
  })
  async createSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSrcAnalisaArgs): Promise<SrcAnalisa> {
    return getPrismaFromContext(ctx).srcAnalisa.create(args);
  }
}
