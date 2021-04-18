import * as TypeGraphQL from "type-graphql";
import { UpsertNetworkArgs } from "./args/UpsertNetworkArgs";
import { Network } from "../../../models/Network";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Network)
export class UpsertNetworkResolver {
  @TypeGraphQL.Mutation(_returns => Network, {
    nullable: false
  })
  async upsertNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertNetworkArgs): Promise<Network> {
    return getPrismaFromContext(ctx).network.upsert(args);
  }
}
