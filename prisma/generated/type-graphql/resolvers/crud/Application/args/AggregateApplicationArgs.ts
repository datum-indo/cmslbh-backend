import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApplicationOrderByInput } from "../../../inputs/ApplicationOrderByInput";
import { ApplicationWhereInput } from "../../../inputs/ApplicationWhereInput";
import { ApplicationWhereUniqueInput } from "../../../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateApplicationArgs {
  @TypeGraphQL.Field(_type => ApplicationWhereInput, {
    nullable: true
  })
  where?: ApplicationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ApplicationOrderByInput], {
    nullable: true
  })
  orderBy?: ApplicationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  cursor?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
