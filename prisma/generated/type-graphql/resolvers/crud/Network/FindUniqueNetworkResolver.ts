import * as TypeGraphQL from "type-graphql";
import { FindUniqueNetworkArgs } from "./args/FindUniqueNetworkArgs";
import { Network } from "../../../models/Network";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class FindUniqueNetworkResolver {
  @TypeGraphQL.Query(_returns => Network, {
    nullable: true
  })
  async network(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueNetworkArgs): Promise<Network | null> {
    return getPrismaFromContext(ctx).network.findUnique(args);
  }
}
