import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseDocumentAvgAggregate } from "../outputs/CaseDocumentAvgAggregate";
import { CaseDocumentCountAggregate } from "../outputs/CaseDocumentCountAggregate";
import { CaseDocumentMaxAggregate } from "../outputs/CaseDocumentMaxAggregate";
import { CaseDocumentMinAggregate } from "../outputs/CaseDocumentMinAggregate";
import { CaseDocumentSumAggregate } from "../outputs/CaseDocumentSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseDocument {
  @TypeGraphQL.Field(_type => CaseDocumentCountAggregate, {
    nullable: true
  })
  count!: CaseDocumentCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseDocumentAvgAggregate, {
    nullable: true
  })
  avg!: CaseDocumentAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseDocumentSumAggregate, {
    nullable: true
  })
  sum!: CaseDocumentSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseDocumentMinAggregate, {
    nullable: true
  })
  min!: CaseDocumentMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseDocumentMaxAggregate, {
    nullable: true
  })
  max!: CaseDocumentMaxAggregate | null;
}
