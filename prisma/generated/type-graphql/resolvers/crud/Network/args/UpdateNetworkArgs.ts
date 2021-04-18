import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NetworkUpdateInput } from "../../../inputs/NetworkUpdateInput";
import { NetworkWhereUniqueInput } from "../../../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNetworkArgs {
  @TypeGraphQL.Field(_type => NetworkUpdateInput, {
    nullable: false
  })
  data!: NetworkUpdateInput;

  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: false
  })
  where!: NetworkWhereUniqueInput;
}
