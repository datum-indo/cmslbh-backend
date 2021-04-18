import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NetworkUpdateManyMutationInput } from "../../../inputs/NetworkUpdateManyMutationInput";
import { NetworkWhereInput } from "../../../inputs/NetworkWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNetworkArgs {
  @TypeGraphQL.Field(_type => NetworkUpdateManyMutationInput, {
    nullable: false
  })
  data!: NetworkUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NetworkWhereInput, {
    nullable: true
  })
  where?: NetworkWhereInput | undefined;
}
