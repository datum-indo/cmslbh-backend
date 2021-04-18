import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralAvgAggregate } from "../outputs/CaseReferralAvgAggregate";
import { CaseReferralCountAggregate } from "../outputs/CaseReferralCountAggregate";
import { CaseReferralMaxAggregate } from "../outputs/CaseReferralMaxAggregate";
import { CaseReferralMinAggregate } from "../outputs/CaseReferralMinAggregate";
import { CaseReferralSumAggregate } from "../outputs/CaseReferralSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseReferral {
  @TypeGraphQL.Field(_type => CaseReferralCountAggregate, {
    nullable: true
  })
  count!: CaseReferralCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseReferralAvgAggregate, {
    nullable: true
  })
  avg!: CaseReferralAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseReferralSumAggregate, {
    nullable: true
  })
  sum!: CaseReferralSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseReferralMinAggregate, {
    nullable: true
  })
  min!: CaseReferralMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseReferralMaxAggregate, {
    nullable: true
  })
  max!: CaseReferralMaxAggregate | null;
}
