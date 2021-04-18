import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIssueCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseIssueCreateOrConnectWithoutCaseIdInput";
import { CaseIssueCreateWithoutCaseIdInput } from "../inputs/CaseIssueCreateWithoutCaseIdInput";
import { CaseIssueScalarWhereInput } from "../inputs/CaseIssueScalarWhereInput";
import { CaseIssueUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseIssueUpdateManyWithWhereWithoutCaseIdInput";
import { CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseIssueWhereUniqueInput } from "../inputs/CaseIssueWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIssueUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseIssueCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseIssueCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseIssueCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueWhereUniqueInput], {
    nullable: true
  })
  set?: CaseIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseIssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseIssueUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseIssueScalarWhereInput[] | undefined;
}
