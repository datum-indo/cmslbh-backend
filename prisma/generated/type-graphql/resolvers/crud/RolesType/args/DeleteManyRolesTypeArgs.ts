import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesTypeWhereInput } from "../../../inputs/RolesTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRolesTypeArgs {
  @TypeGraphQL.Field(_type => RolesTypeWhereInput, {
    nullable: true
  })
  where?: RolesTypeWhereInput | undefined;
}
