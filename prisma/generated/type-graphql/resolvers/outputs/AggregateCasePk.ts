import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkAvgAggregate } from "../outputs/CasePkAvgAggregate";
import { CasePkCountAggregate } from "../outputs/CasePkCountAggregate";
import { CasePkMaxAggregate } from "../outputs/CasePkMaxAggregate";
import { CasePkMinAggregate } from "../outputs/CasePkMinAggregate";
import { CasePkSumAggregate } from "../outputs/CasePkSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCasePk {
  @TypeGraphQL.Field(_type => CasePkCountAggregate, {
    nullable: true
  })
  count!: CasePkCountAggregate | null;

  @TypeGraphQL.Field(_type => CasePkAvgAggregate, {
    nullable: true
  })
  avg!: CasePkAvgAggregate | null;

  @TypeGraphQL.Field(_type => CasePkSumAggregate, {
    nullable: true
  })
  sum!: CasePkSumAggregate | null;

  @TypeGraphQL.Field(_type => CasePkMinAggregate, {
    nullable: true
  })
  min!: CasePkMinAggregate | null;

  @TypeGraphQL.Field(_type => CasePkMaxAggregate, {
    nullable: true
  })
  max!: CasePkMaxAggregate | null;
}
