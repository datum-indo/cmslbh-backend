import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateNetworkArgs } from "./args/AggregateNetworkArgs";
import { CreateNetworkArgs } from "./args/CreateNetworkArgs";
import { DeleteManyNetworkArgs } from "./args/DeleteManyNetworkArgs";
import { DeleteNetworkArgs } from "./args/DeleteNetworkArgs";
import { FindFirstNetworkArgs } from "./args/FindFirstNetworkArgs";
import { FindManyNetworkArgs } from "./args/FindManyNetworkArgs";
import { FindUniqueNetworkArgs } from "./args/FindUniqueNetworkArgs";
import { UpdateManyNetworkArgs } from "./args/UpdateManyNetworkArgs";
import { UpdateNetworkArgs } from "./args/UpdateNetworkArgs";
import { UpsertNetworkArgs } from "./args/UpsertNetworkArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Network } from "../../../models/Network";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNetwork } from "../../outputs/AggregateNetwork";

@TypeGraphQL.Resolver(_of => Network)
export class NetworkCrudResolver {
  @TypeGraphQL.Query(_returns => Network, {
    nullable: true
  })
  async network(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueNetworkArgs): Promise<Network | null> {
    return getPrismaFromContext(ctx).network.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Network, {
    nullable: true
  })
  async findFirstNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstNetworkArgs): Promise<Network | null> {
    return getPrismaFromContext(ctx).network.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Network], {
    nullable: false
  })
  async networks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNetworkArgs): Promise<Network[]> {
    return getPrismaFromContext(ctx).network.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Network, {
    nullable: false
  })
  async createNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNetworkArgs): Promise<Network> {
    return getPrismaFromContext(ctx).network.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Network, {
    nullable: true
  })
  async deleteNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNetworkArgs): Promise<Network | null> {
    return getPrismaFromContext(ctx).network.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Network, {
    nullable: true
  })
  async updateNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNetworkArgs): Promise<Network | null> {
    return getPrismaFromContext(ctx).network.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyNetworkArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).network.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNetworkArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).network.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Network, {
    nullable: false
  })
  async upsertNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertNetworkArgs): Promise<Network> {
    return getPrismaFromContext(ctx).network.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateNetwork, {
    nullable: false
  })
  async aggregateNetwork(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNetworkArgs): Promise<AggregateNetwork> {
    return getPrismaFromContext(ctx).network.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
