import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIssueWhereInput } from "../inputs/CaseIssueWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIssueListRelationFilter {
  @TypeGraphQL.Field(_type => CaseIssueWhereInput, {
    nullable: true
  })
  every?: CaseIssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseIssueWhereInput, {
    nullable: true
  })
  some?: CaseIssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseIssueWhereInput, {
    nullable: true
  })
  none?: CaseIssueWhereInput | undefined;
}
