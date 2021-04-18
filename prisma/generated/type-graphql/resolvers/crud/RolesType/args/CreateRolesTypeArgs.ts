import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesTypeCreateInput } from "../../../inputs/RolesTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRolesTypeArgs {
  @TypeGraphQL.Field(_type => RolesTypeCreateInput, {
    nullable: false
  })
  data!: RolesTypeCreateInput;
}
