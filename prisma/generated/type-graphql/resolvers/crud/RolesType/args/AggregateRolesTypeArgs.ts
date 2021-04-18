import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesTypeOrderByInput } from "../../../inputs/RolesTypeOrderByInput";
import { RolesTypeWhereInput } from "../../../inputs/RolesTypeWhereInput";
import { RolesTypeWhereUniqueInput } from "../../../inputs/RolesTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRolesTypeArgs {
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
}
