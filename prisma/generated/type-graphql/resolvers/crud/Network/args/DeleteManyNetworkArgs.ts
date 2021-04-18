import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NetworkWhereInput } from "../../../inputs/NetworkWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNetworkArgs {
  @TypeGraphQL.Field(_type => NetworkWhereInput, {
    nullable: true
  })
  where?: NetworkWhereInput | undefined;
}
