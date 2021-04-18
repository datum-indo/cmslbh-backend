import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIncidentLocationAvgAggregate } from "../outputs/CaseIncidentLocationAvgAggregate";
import { CaseIncidentLocationCountAggregate } from "../outputs/CaseIncidentLocationCountAggregate";
import { CaseIncidentLocationMaxAggregate } from "../outputs/CaseIncidentLocationMaxAggregate";
import { CaseIncidentLocationMinAggregate } from "../outputs/CaseIncidentLocationMinAggregate";
import { CaseIncidentLocationSumAggregate } from "../outputs/CaseIncidentLocationSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseIncidentLocation {
  @TypeGraphQL.Field(_type => CaseIncidentLocationCountAggregate, {
    nullable: true
  })
  count!: CaseIncidentLocationCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseIncidentLocationAvgAggregate, {
    nullable: true
  })
  avg!: CaseIncidentLocationAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseIncidentLocationSumAggregate, {
    nullable: true
  })
  sum!: CaseIncidentLocationSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseIncidentLocationMinAggregate, {
    nullable: true
  })
  min!: CaseIncidentLocationMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseIncidentLocationMaxAggregate, {
    nullable: true
  })
  max!: CaseIncidentLocationMaxAggregate | null;
}
