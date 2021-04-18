import * as TypeGraphQL from "type-graphql";
import { UpdateNetworkArgs } from "./args/UpdateNetworkArgs";
import { Network } from "../../../models/Network";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class UpdateNetworkResolver {
  @TypeGraphQL.Mutation(_returns => Network, {
    nullable: true
  })
  async updateNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNetworkArgs): Promise<Network | null> {
    return getPrismaFromContext(ctx).network.update(args);
  }
}
