import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestAppOrderByInput } from "../../../inputs/LogRequestAppOrderByInput";
import { LogRequestAppWhereInput } from "../../../inputs/LogRequestAppWhereInput";
import { LogRequestAppWhereUniqueInput } from "../../../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLogRequestAppArgs {
  @TypeGraphQL.Field(_type => LogRequestAppWhereInput, {
    nullable: true
  })
  where?: LogRequestAppWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppOrderByInput], {
    nullable: true
  })
  orderBy?: LogRequestAppOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => LogRequestAppWhereUniqueInput, {
    nullable: true
  })
  cursor?: LogRequestAppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
