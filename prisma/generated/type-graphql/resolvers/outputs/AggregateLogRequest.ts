import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAvgAggregate } from "../outputs/LogRequestAvgAggregate";
import { LogRequestCountAggregate } from "../outputs/LogRequestCountAggregate";
import { LogRequestMaxAggregate } from "../outputs/LogRequestMaxAggregate";
import { LogRequestMinAggregate } from "../outputs/LogRequestMinAggregate";
import { LogRequestSumAggregate } from "../outputs/LogRequestSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateLogRequest {
  @TypeGraphQL.Field(_type => LogRequestCountAggregate, {
    nullable: true
  })
  count!: LogRequestCountAggregate | null;

  @TypeGraphQL.Field(_type => LogRequestAvgAggregate, {
    nullable: true
  })
  avg!: LogRequestAvgAggregate | null;

  @TypeGraphQL.Field(_type => LogRequestSumAggregate, {
    nullable: true
  })
  sum!: LogRequestSumAggregate | null;

  @TypeGraphQL.Field(_type => LogRequestMinAggregate, {
    nullable: true
  })
  min!: LogRequestMinAggregate | null;

  @TypeGraphQL.Field(_type => LogRequestMaxAggregate, {
    nullable: true
  })
  max!: LogRequestMaxAggregate | null;
}
