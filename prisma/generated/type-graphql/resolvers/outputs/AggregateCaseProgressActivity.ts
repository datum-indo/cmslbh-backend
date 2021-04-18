import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityAvgAggregate } from "../outputs/CaseProgressActivityAvgAggregate";
import { CaseProgressActivityCountAggregate } from "../outputs/CaseProgressActivityCountAggregate";
import { CaseProgressActivityMaxAggregate } from "../outputs/CaseProgressActivityMaxAggregate";
import { CaseProgressActivityMinAggregate } from "../outputs/CaseProgressActivityMinAggregate";
import { CaseProgressActivitySumAggregate } from "../outputs/CaseProgressActivitySumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseProgressActivity {
  @TypeGraphQL.Field(_type => CaseProgressActivityCountAggregate, {
    nullable: true
  })
  count!: CaseProgressActivityCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityAvgAggregate, {
    nullable: true
  })
  avg!: CaseProgressActivityAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivitySumAggregate, {
    nullable: true
  })
  sum!: CaseProgressActivitySumAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityMinAggregate, {
    nullable: true
  })
  min!: CaseProgressActivityMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityMaxAggregate, {
    nullable: true
  })
  max!: CaseProgressActivityMaxAggregate | null;
}
