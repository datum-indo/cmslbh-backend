import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestOrderByInput } from "../../../inputs/LogRequestOrderByInput";
import { LogRequestWhereInput } from "../../../inputs/LogRequestWhereInput";
import { LogRequestWhereUniqueInput } from "../../../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLogRequestArgs {
  @TypeGraphQL.Field(_type => LogRequestWhereInput, {
    nullable: true
  })
  where?: LogRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LogRequestOrderByInput], {
    nullable: true
  })
  orderBy?: LogRequestOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: true
  })
  cursor?: LogRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
