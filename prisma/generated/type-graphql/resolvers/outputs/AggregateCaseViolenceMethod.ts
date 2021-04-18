import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolenceMethodAvgAggregate } from "../outputs/CaseViolenceMethodAvgAggregate";
import { CaseViolenceMethodCountAggregate } from "../outputs/CaseViolenceMethodCountAggregate";
import { CaseViolenceMethodMaxAggregate } from "../outputs/CaseViolenceMethodMaxAggregate";
import { CaseViolenceMethodMinAggregate } from "../outputs/CaseViolenceMethodMinAggregate";
import { CaseViolenceMethodSumAggregate } from "../outputs/CaseViolenceMethodSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseViolenceMethod {
  @TypeGraphQL.Field(_type => CaseViolenceMethodCountAggregate, {
    nullable: true
  })
  count!: CaseViolenceMethodCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseViolenceMethodAvgAggregate, {
    nullable: true
  })
  avg!: CaseViolenceMethodAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseViolenceMethodSumAggregate, {
    nullable: true
  })
  sum!: CaseViolenceMethodSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseViolenceMethodMinAggregate, {
    nullable: true
  })
  min!: CaseViolenceMethodMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseViolenceMethodMaxAggregate, {
    nullable: true
  })
  max!: CaseViolenceMethodMaxAggregate | null;
}
