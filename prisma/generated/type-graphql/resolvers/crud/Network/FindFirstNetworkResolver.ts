import * as TypeGraphQL from "type-graphql";
import { FindFirstNetworkArgs } from "./args/FindFirstNetworkArgs";
import { Network } from "../../../models/Network";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class FindFirstNetworkResolver {
  @TypeGraphQL.Query(_returns => Network, {
    nullable: true
  })
  async findFirstNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstNetworkArgs): Promise<Network | null> {
    return getPrismaFromContext(ctx).network.findFirst(args);
  }
}
