import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIssueAvgAggregate } from "../outputs/CaseIssueAvgAggregate";
import { CaseIssueCountAggregate } from "../outputs/CaseIssueCountAggregate";
import { CaseIssueMaxAggregate } from "../outputs/CaseIssueMaxAggregate";
import { CaseIssueMinAggregate } from "../outputs/CaseIssueMinAggregate";
import { CaseIssueSumAggregate } from "../outputs/CaseIssueSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseIssue {
  @TypeGraphQL.Field(_type => CaseIssueCountAggregate, {
    nullable: true
  })
  count!: CaseIssueCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseIssueAvgAggregate, {
    nullable: true
  })
  avg!: CaseIssueAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseIssueSumAggregate, {
    nullable: true
  })
  sum!: CaseIssueSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseIssueMinAggregate, {
    nullable: true
  })
  min!: CaseIssueMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseIssueMaxAggregate, {
    nullable: true
  })
  max!: CaseIssueMaxAggregate | null;
}
