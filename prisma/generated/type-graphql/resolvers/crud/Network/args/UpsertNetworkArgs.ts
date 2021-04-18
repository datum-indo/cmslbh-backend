import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NetworkCreateInput } from "../../../inputs/NetworkCreateInput";
import { NetworkUpdateInput } from "../../../inputs/NetworkUpdateInput";
import { NetworkWhereUniqueInput } from "../../../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNetworkArgs {
  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: false
  })
  where!: NetworkWhereUniqueInput;

  @TypeGraphQL.Field(_type => NetworkCreateInput, {
    nullable: false
  })
  create!: NetworkCreateInput;

  @TypeGraphQL.Field(_type => NetworkUpdateInput, {
    nullable: false
  })
  update!: NetworkUpdateInput;
}
