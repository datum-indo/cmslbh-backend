import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressAvgAggregate } from "../outputs/CaseProgressAvgAggregate";
import { CaseProgressCountAggregate } from "../outputs/CaseProgressCountAggregate";
import { CaseProgressMaxAggregate } from "../outputs/CaseProgressMaxAggregate";
import { CaseProgressMinAggregate } from "../outputs/CaseProgressMinAggregate";
import { CaseProgressSumAggregate } from "../outputs/CaseProgressSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseProgress {
  @TypeGraphQL.Field(_type => CaseProgressCountAggregate, {
    nullable: true
  })
  count!: CaseProgressCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressAvgAggregate, {
    nullable: true
  })
  avg!: CaseProgressAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressSumAggregate, {
    nullable: true
  })
  sum!: CaseProgressSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressMinAggregate, {
    nullable: true
  })
  min!: CaseProgressMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressMaxAggregate, {
    nullable: true
  })
  max!: CaseProgressMaxAggregate | null;
}
