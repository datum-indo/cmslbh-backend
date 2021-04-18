import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferReferralAvgAggregate } from "../outputs/CaseTransferReferralAvgAggregate";
import { CaseTransferReferralCountAggregate } from "../outputs/CaseTransferReferralCountAggregate";
import { CaseTransferReferralMaxAggregate } from "../outputs/CaseTransferReferralMaxAggregate";
import { CaseTransferReferralMinAggregate } from "../outputs/CaseTransferReferralMinAggregate";
import { CaseTransferReferralSumAggregate } from "../outputs/CaseTransferReferralSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseTransferReferral {
  @TypeGraphQL.Field(_type => CaseTransferReferralCountAggregate, {
    nullable: true
  })
  count!: CaseTransferReferralCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseTransferReferralAvgAggregate, {
    nullable: true
  })
  avg!: CaseTransferReferralAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseTransferReferralSumAggregate, {
    nullable: true
  })
  sum!: CaseTransferReferralSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseTransferReferralMinAggregate, {
    nullable: true
  })
  min!: CaseTransferReferralMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseTransferReferralMaxAggregate, {
    nullable: true
  })
  max!: CaseTransferReferralMaxAggregate | null;
}
