import * as TypeGraphQL from "type-graphql";
import { CreateNetworkArgs } from "./args/CreateNetworkArgs";
import { Network } from "../../../models/Network";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class CreateNetworkResolver {
  @TypeGraphQL.Mutation(_returns => Network, {
    nullable: false
  })
  async createNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNetworkArgs): Promise<Network> {
    return getPrismaFromContext(ctx).network.create(args);
  }
}
