import * as TypeGraphQL from "type-graphql";
import { UpdateManyNetworkArgs } from "./args/UpdateManyNetworkArgs";
import { Network } from "../../../models/Network";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class UpdateManyNetworkResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNetworkArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).network.updateMany(args);
  }
}
