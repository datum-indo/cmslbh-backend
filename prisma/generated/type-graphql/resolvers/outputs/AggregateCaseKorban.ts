import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseKorbanAvgAggregate } from "../outputs/CaseKorbanAvgAggregate";
import { CaseKorbanCountAggregate } from "../outputs/CaseKorbanCountAggregate";
import { CaseKorbanMaxAggregate } from "../outputs/CaseKorbanMaxAggregate";
import { CaseKorbanMinAggregate } from "../outputs/CaseKorbanMinAggregate";
import { CaseKorbanSumAggregate } from "../outputs/CaseKorbanSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseKorban {
  @TypeGraphQL.Field(_type => CaseKorbanCountAggregate, {
    nullable: true
  })
  count!: CaseKorbanCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseKorbanAvgAggregate, {
    nullable: true
  })
  avg!: CaseKorbanAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseKorbanSumAggregate, {
    nullable: true
  })
  sum!: CaseKorbanSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseKorbanMinAggregate, {
    nullable: true
  })
  min!: CaseKorbanMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseKorbanMaxAggregate, {
    nullable: true
  })
  max!: CaseKorbanMaxAggregate | null;
}
