import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesTypeCreateInput } from "../../../inputs/RolesTypeCreateInput";
import { RolesTypeUpdateInput } from "../../../inputs/RolesTypeUpdateInput";
import { RolesTypeWhereUniqueInput } from "../../../inputs/RolesTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRolesTypeArgs {
  @TypeGraphQL.Field(_type => RolesTypeWhereUniqueInput, {
    nullable: false
  })
  where!: RolesTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => RolesTypeCreateInput, {
    nullable: false
  })
  create!: RolesTypeCreateInput;

  @TypeGraphQL.Field(_type => RolesTypeUpdateInput, {
    nullable: false
  })
  update!: RolesTypeUpdateInput;
}
