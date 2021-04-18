import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesTypeWhereUniqueInput } from "../../../inputs/RolesTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRolesTypeArgs {
  @TypeGraphQL.Field(_type => RolesTypeWhereUniqueInput, {
    nullable: false
  })
  where!: RolesTypeWhereUniqueInput;
}
