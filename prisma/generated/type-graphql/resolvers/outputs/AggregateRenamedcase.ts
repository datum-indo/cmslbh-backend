import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseAvgAggregate } from "../outputs/RenamedcaseAvgAggregate";
import { RenamedcaseCountAggregate } from "../outputs/RenamedcaseCountAggregate";
import { RenamedcaseMaxAggregate } from "../outputs/RenamedcaseMaxAggregate";
import { RenamedcaseMinAggregate } from "../outputs/RenamedcaseMinAggregate";
import { RenamedcaseSumAggregate } from "../outputs/RenamedcaseSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateRenamedcase {
  @TypeGraphQL.Field(_type => RenamedcaseCountAggregate, {
    nullable: true
  })
  count!: RenamedcaseCountAggregate | null;

  @TypeGraphQL.Field(_type => RenamedcaseAvgAggregate, {
    nullable: true
  })
  avg!: RenamedcaseAvgAggregate | null;

  @TypeGraphQL.Field(_type => RenamedcaseSumAggregate, {
    nullable: true
  })
  sum!: RenamedcaseSumAggregate | null;

  @TypeGraphQL.Field(_type => RenamedcaseMinAggregate, {
    nullable: true
  })
  min!: RenamedcaseMinAggregate | null;

  @TypeGraphQL.Field(_type => RenamedcaseMaxAggregate, {
    nullable: true
  })
  max!: RenamedcaseMaxAggregate | null;
}
