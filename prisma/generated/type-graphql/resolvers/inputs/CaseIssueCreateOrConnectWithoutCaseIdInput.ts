import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIssueCreateWithoutCaseIdInput } from "../inputs/CaseIssueCreateWithoutCaseIdInput";
import { CaseIssueWhereUniqueInput } from "../inputs/CaseIssueWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIssueCreateOrConnectWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseIssueWhereUniqueInput, {
    nullable: false
  })
  where!: CaseIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseIssueCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseIssueCreateWithoutCaseIdInput;
}
