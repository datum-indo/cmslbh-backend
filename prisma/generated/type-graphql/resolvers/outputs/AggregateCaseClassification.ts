import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseClassificationAvgAggregate } from "../outputs/CaseClassificationAvgAggregate";
import { CaseClassificationCountAggregate } from "../outputs/CaseClassificationCountAggregate";
import { CaseClassificationMaxAggregate } from "../outputs/CaseClassificationMaxAggregate";
import { CaseClassificationMinAggregate } from "../outputs/CaseClassificationMinAggregate";
import { CaseClassificationSumAggregate } from "../outputs/CaseClassificationSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseClassification {
  @TypeGraphQL.Field(_type => CaseClassificationCountAggregate, {
    nullable: true
  })
  count!: CaseClassificationCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseClassificationAvgAggregate, {
    nullable: true
  })
  avg!: CaseClassificationAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseClassificationSumAggregate, {
    nullable: true
  })
  sum!: CaseClassificationSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseClassificationMinAggregate, {
    nullable: true
  })
  min!: CaseClassificationMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseClassificationMaxAggregate, {
    nullable: true
  })
  max!: CaseClassificationMaxAggregate | null;
}
