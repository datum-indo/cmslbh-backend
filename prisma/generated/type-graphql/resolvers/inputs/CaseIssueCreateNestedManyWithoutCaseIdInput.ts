import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIssueCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseIssueCreateOrConnectWithoutCaseIdInput";
import { CaseIssueCreateWithoutCaseIdInput } from "../inputs/CaseIssueCreateWithoutCaseIdInput";
import { CaseIssueWhereUniqueInput } from "../inputs/CaseIssueWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIssueCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseIssueCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseIssueCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseIssueCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseIssueWhereUniqueInput[] | undefined;
}
