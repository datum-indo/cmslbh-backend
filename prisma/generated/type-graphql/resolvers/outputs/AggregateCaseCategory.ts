import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseCategoryAvgAggregate } from "../outputs/CaseCategoryAvgAggregate";
import { CaseCategoryCountAggregate } from "../outputs/CaseCategoryCountAggregate";
import { CaseCategoryMaxAggregate } from "../outputs/CaseCategoryMaxAggregate";
import { CaseCategoryMinAggregate } from "../outputs/CaseCategoryMinAggregate";
import { CaseCategorySumAggregate } from "../outputs/CaseCategorySumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseCategory {
  @TypeGraphQL.Field(_type => CaseCategoryCountAggregate, {
    nullable: true
  })
  count!: CaseCategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseCategoryAvgAggregate, {
    nullable: true
  })
  avg!: CaseCategoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseCategorySumAggregate, {
    nullable: true
  })
  sum!: CaseCategorySumAggregate | null;

  @TypeGraphQL.Field(_type => CaseCategoryMinAggregate, {
    nullable: true
  })
  min!: CaseCategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseCategoryMaxAggregate, {
    nullable: true
  })
  max!: CaseCategoryMaxAggregate | null;
}
