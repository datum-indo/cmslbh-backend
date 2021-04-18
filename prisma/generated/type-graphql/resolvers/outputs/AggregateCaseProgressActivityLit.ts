import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityLitAvgAggregate } from "../outputs/CaseProgressActivityLitAvgAggregate";
import { CaseProgressActivityLitCountAggregate } from "../outputs/CaseProgressActivityLitCountAggregate";
import { CaseProgressActivityLitMaxAggregate } from "../outputs/CaseProgressActivityLitMaxAggregate";
import { CaseProgressActivityLitMinAggregate } from "../outputs/CaseProgressActivityLitMinAggregate";
import { CaseProgressActivityLitSumAggregate } from "../outputs/CaseProgressActivityLitSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseProgressActivityLit {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitCountAggregate, {
    nullable: true
  })
  count!: CaseProgressActivityLitCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitAvgAggregate, {
    nullable: true
  })
  avg!: CaseProgressActivityLitAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitSumAggregate, {
    nullable: true
  })
  sum!: CaseProgressActivityLitSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitMinAggregate, {
    nullable: true
  })
  min!: CaseProgressActivityLitMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitMaxAggregate, {
    nullable: true
  })
  max!: CaseProgressActivityLitMaxAggregate | null;
}
