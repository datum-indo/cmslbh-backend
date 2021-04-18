import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NetworkOrderByInput } from "../../../inputs/NetworkOrderByInput";
import { NetworkWhereInput } from "../../../inputs/NetworkWhereInput";
import { NetworkWhereUniqueInput } from "../../../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNetworkArgs {
  @TypeGraphQL.Field(_type => NetworkWhereInput, {
    nullable: true
  })
  where?: NetworkWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NetworkOrderByInput], {
    nullable: true
  })
  orderBy?: NetworkOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: true
  })
  cursor?: NetworkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
