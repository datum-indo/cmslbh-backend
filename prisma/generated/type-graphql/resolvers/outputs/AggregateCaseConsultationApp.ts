import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppAvgAggregate } from "../outputs/CaseConsultationAppAvgAggregate";
import { CaseConsultationAppCountAggregate } from "../outputs/CaseConsultationAppCountAggregate";
import { CaseConsultationAppMaxAggregate } from "../outputs/CaseConsultationAppMaxAggregate";
import { CaseConsultationAppMinAggregate } from "../outputs/CaseConsultationAppMinAggregate";
import { CaseConsultationAppSumAggregate } from "../outputs/CaseConsultationAppSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseConsultationApp {
  @TypeGraphQL.Field(_type => CaseConsultationAppCountAggregate, {
    nullable: true
  })
  count!: CaseConsultationAppCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseConsultationAppAvgAggregate, {
    nullable: true
  })
  avg!: CaseConsultationAppAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseConsultationAppSumAggregate, {
    nullable: true
  })
  sum!: CaseConsultationAppSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseConsultationAppMinAggregate, {
    nullable: true
  })
  min!: CaseConsultationAppMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseConsultationAppMaxAggregate, {
    nullable: true
  })
  max!: CaseConsultationAppMaxAggregate | null;
}
