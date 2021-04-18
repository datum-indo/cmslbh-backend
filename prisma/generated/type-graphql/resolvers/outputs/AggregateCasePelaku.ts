import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuAvgAggregate } from "../outputs/CasePelakuAvgAggregate";
import { CasePelakuCountAggregate } from "../outputs/CasePelakuCountAggregate";
import { CasePelakuMaxAggregate } from "../outputs/CasePelakuMaxAggregate";
import { CasePelakuMinAggregate } from "../outputs/CasePelakuMinAggregate";
import { CasePelakuSumAggregate } from "../outputs/CasePelakuSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCasePelaku {
  @TypeGraphQL.Field(_type => CasePelakuCountAggregate, {
    nullable: true
  })
  count!: CasePelakuCountAggregate | null;

  @TypeGraphQL.Field(_type => CasePelakuAvgAggregate, {
    nullable: true
  })
  avg!: CasePelakuAvgAggregate | null;

  @TypeGraphQL.Field(_type => CasePelakuSumAggregate, {
    nullable: true
  })
  sum!: CasePelakuSumAggregate | null;

  @TypeGraphQL.Field(_type => CasePelakuMinAggregate, {
    nullable: true
  })
  min!: CasePelakuMinAggregate | null;

  @TypeGraphQL.Field(_type => CasePelakuMaxAggregate, {
    nullable: true
  })
  max!: CasePelakuMaxAggregate | null;
}
