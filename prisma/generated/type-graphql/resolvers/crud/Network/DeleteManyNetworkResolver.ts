import * as TypeGraphQL from "type-graphql";
import { DeleteManyNetworkArgs } from "./args/DeleteManyNetworkArgs";
import { Network } from "../../../models/Network";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class DeleteManyNetworkResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyNetworkArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).network.deleteMany(args);
  }
}
