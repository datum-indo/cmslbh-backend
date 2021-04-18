import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferAvgAggregate } from "../outputs/CaseTransferAvgAggregate";
import { CaseTransferCountAggregate } from "../outputs/CaseTransferCountAggregate";
import { CaseTransferMaxAggregate } from "../outputs/CaseTransferMaxAggregate";
import { CaseTransferMinAggregate } from "../outputs/CaseTransferMinAggregate";
import { CaseTransferSumAggregate } from "../outputs/CaseTransferSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseTransfer {
  @TypeGraphQL.Field(_type => CaseTransferCountAggregate, {
    nullable: true
  })
  count!: CaseTransferCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseTransferAvgAggregate, {
    nullable: true
  })
  avg!: CaseTransferAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseTransferSumAggregate, {
    nullable: true
  })
  sum!: CaseTransferSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseTransferMinAggregate, {
    nullable: true
  })
  min!: CaseTransferMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseTransferMaxAggregate, {
    nullable: true
  })
  max!: CaseTransferMaxAggregate | null;
}
