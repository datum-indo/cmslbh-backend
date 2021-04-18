import * as TypeGraphQL from "type-graphql";
import { UpsertSrcAnalisaArgs } from "./args/UpsertSrcAnalisaArgs";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class UpsertSrcAnalisaResolver {
  @TypeGraphQL.Mutation(_returns => SrcAnalisa, {
    nullable: false
  })
  async upsertSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSrcAnalisaArgs): Promise<SrcAnalisa> {
    return getPrismaFromContext(ctx).srcAnalisa.upsert(args);
  }
}
