import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolatedRightAvgAggregate } from "../outputs/CaseViolatedRightAvgAggregate";
import { CaseViolatedRightCountAggregate } from "../outputs/CaseViolatedRightCountAggregate";
import { CaseViolatedRightMaxAggregate } from "../outputs/CaseViolatedRightMaxAggregate";
import { CaseViolatedRightMinAggregate } from "../outputs/CaseViolatedRightMinAggregate";
import { CaseViolatedRightSumAggregate } from "../outputs/CaseViolatedRightSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseViolatedRight {
  @TypeGraphQL.Field(_type => CaseViolatedRightCountAggregate, {
    nullable: true
  })
  count!: CaseViolatedRightCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseViolatedRightAvgAggregate, {
    nullable: true
  })
  avg!: CaseViolatedRightAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseViolatedRightSumAggregate, {
    nullable: true
  })
  sum!: CaseViolatedRightSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseViolatedRightMinAggregate, {
    nullable: true
  })
  min!: CaseViolatedRightMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseViolatedRightMaxAggregate, {
    nullable: true
  })
  max!: CaseViolatedRightMaxAggregate | null;
}
