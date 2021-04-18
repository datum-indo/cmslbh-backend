import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesTypeOrderByInput } from "../../../inputs/RolesTypeOrderByInput";
import { RolesTypeWhereInput } from "../../../inputs/RolesTypeWhereInput";
import { RolesTypeWhereUniqueInput } from "../../../inputs/RolesTypeWhereUniqueInput";
import { RolesTypeScalarFieldEnum } from "../../../../enums/RolesTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyRolesTypeArgs {
  @TypeGraphQL.Field(_type => RolesTypeWhereInput, {
    nullable: true
  })
  where?: RolesTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RolesTypeOrderByInput], {
    nullable: true
  })
  orderBy?: RolesTypeOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => RolesTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: RolesTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RolesTypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "description"> | undefined;
}
