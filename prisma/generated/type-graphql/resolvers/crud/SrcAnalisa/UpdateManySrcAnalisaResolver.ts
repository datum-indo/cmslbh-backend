import * as TypeGraphQL from "type-graphql";
import { UpdateManySrcAnalisaArgs } from "./args/UpdateManySrcAnalisaArgs";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class UpdateManySrcAnalisaResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySrcAnalisaArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcAnalisa.updateMany(args);
  }
}
