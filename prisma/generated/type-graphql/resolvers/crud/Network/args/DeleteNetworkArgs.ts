import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NetworkWhereUniqueInput } from "../../../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteNetworkArgs {
  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: false
  })
  where!: NetworkWhereUniqueInput;
}
