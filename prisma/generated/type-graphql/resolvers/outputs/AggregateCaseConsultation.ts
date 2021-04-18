import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAvgAggregate } from "../outputs/CaseConsultationAvgAggregate";
import { CaseConsultationCountAggregate } from "../outputs/CaseConsultationCountAggregate";
import { CaseConsultationMaxAggregate } from "../outputs/CaseConsultationMaxAggregate";
import { CaseConsultationMinAggregate } from "../outputs/CaseConsultationMinAggregate";
import { CaseConsultationSumAggregate } from "../outputs/CaseConsultationSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseConsultation {
  @TypeGraphQL.Field(_type => CaseConsultationCountAggregate, {
    nullable: true
  })
  count!: CaseConsultationCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseConsultationAvgAggregate, {
    nullable: true
  })
  avg!: CaseConsultationAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseConsultationSumAggregate, {
    nullable: true
  })
  sum!: CaseConsultationSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseConsultationMinAggregate, {
    nullable: true
  })
  min!: CaseConsultationMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseConsultationMaxAggregate, {
    nullable: true
  })
  max!: CaseConsultationMaxAggregate | null;
}
