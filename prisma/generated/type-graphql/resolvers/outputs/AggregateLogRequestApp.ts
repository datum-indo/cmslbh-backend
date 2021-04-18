import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAppAvgAggregate } from "../outputs/LogRequestAppAvgAggregate";
import { LogRequestAppCountAggregate } from "../outputs/LogRequestAppCountAggregate";
import { LogRequestAppMaxAggregate } from "../outputs/LogRequestAppMaxAggregate";
import { LogRequestAppMinAggregate } from "../outputs/LogRequestAppMinAggregate";
import { LogRequestAppSumAggregate } from "../outputs/LogRequestAppSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateLogRequestApp {
  @TypeGraphQL.Field(_type => LogRequestAppCountAggregate, {
    nullable: true
  })
  count!: LogRequestAppCountAggregate | null;

  @TypeGraphQL.Field(_type => LogRequestAppAvgAggregate, {
    nullable: true
  })
  avg!: LogRequestAppAvgAggregate | null;

  @TypeGraphQL.Field(_type => LogRequestAppSumAggregate, {
    nullable: true
  })
  sum!: LogRequestAppSumAggregate | null;

  @TypeGraphQL.Field(_type => LogRequestAppMinAggregate, {
    nullable: true
  })
  min!: LogRequestAppMinAggregate | null;

  @TypeGraphQL.Field(_type => LogRequestAppMaxAggregate, {
    nullable: true
  })
  max!: LogRequestAppMaxAggregate | null;
}
