import * as TypeGraphQL from "type-graphql";
import { DeleteManySrcAnalisaArgs } from "./args/DeleteManySrcAnalisaArgs";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class DeleteManySrcAnalisaResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySrcAnalisaArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcAnalisa.deleteMany(args);
  }
}
