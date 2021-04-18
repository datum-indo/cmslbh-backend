import * as TypeGraphQL from "type-graphql";
import { FindManyNetworkArgs } from "./args/FindManyNetworkArgs";
import { Network } from "../../../models/Network";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class FindManyNetworkResolver {
  @TypeGraphQL.Query(_returns => [Network], {
    nullable: false
  })
  async networks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNetworkArgs): Promise<Network[]> {
    return getPrismaFromContext(ctx).network.findMany(args);
  }
}
