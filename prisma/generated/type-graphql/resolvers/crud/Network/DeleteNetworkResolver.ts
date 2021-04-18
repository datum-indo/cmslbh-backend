import * as TypeGraphQL from "type-graphql";
import { DeleteNetworkArgs } from "./args/DeleteNetworkArgs";
import { Network } from "../../../models/Network";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class DeleteNetworkResolver {
  @TypeGraphQL.Mutation(_returns => Network, {
    nullable: true
  })
  async deleteNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNetworkArgs): Promise<Network | null> {
    return getPrismaFromContext(ctx).network.delete(args);
  }
}
