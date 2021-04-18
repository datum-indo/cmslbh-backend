import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesTypeUpdateInput } from "../../../inputs/RolesTypeUpdateInput";
import { RolesTypeWhereUniqueInput } from "../../../inputs/RolesTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRolesTypeArgs {
  @TypeGraphQL.Field(_type => RolesTypeUpdateInput, {
    nullable: false
  })
  data!: RolesTypeUpdateInput;

  @TypeGraphQL.Field(_type => RolesTypeWhereUniqueInput, {
    nullable: false
  })
  where!: RolesTypeWhereUniqueInput;
}
