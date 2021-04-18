import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesTypeUpdateManyMutationInput } from "../../../inputs/RolesTypeUpdateManyMutationInput";
import { RolesTypeWhereInput } from "../../../inputs/RolesTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRolesTypeArgs {
  @TypeGraphQL.Field(_type => RolesTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: RolesTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RolesTypeWhereInput, {
    nullable: true
  })
  where?: RolesTypeWhereInput | undefined;
}
