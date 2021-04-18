import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityNonlitAvgAggregate } from "../outputs/CaseProgressActivityNonlitAvgAggregate";
import { CaseProgressActivityNonlitCountAggregate } from "../outputs/CaseProgressActivityNonlitCountAggregate";
import { CaseProgressActivityNonlitMaxAggregate } from "../outputs/CaseProgressActivityNonlitMaxAggregate";
import { CaseProgressActivityNonlitMinAggregate } from "../outputs/CaseProgressActivityNonlitMinAggregate";
import { CaseProgressActivityNonlitSumAggregate } from "../outputs/CaseProgressActivityNonlitSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseProgressActivityNonlit {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitCountAggregate, {
    nullable: true
  })
  count!: CaseProgressActivityNonlitCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitAvgAggregate, {
    nullable: true
  })
  avg!: CaseProgressActivityNonlitAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitSumAggregate, {
    nullable: true
  })
  sum!: CaseProgressActivityNonlitSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitMinAggregate, {
    nullable: true
  })
  min!: CaseProgressActivityNonlitMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitMaxAggregate, {
    nullable: true
  })
  max!: CaseProgressActivityNonlitMaxAggregate | null;
}
