import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NetworkCreateInput } from "../../../inputs/NetworkCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNetworkArgs {
  @TypeGraphQL.Field(_type => NetworkCreateInput, {
    nullable: false
  })
  data!: NetworkCreateInput;
}
