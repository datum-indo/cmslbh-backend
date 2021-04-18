import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RenamedcaseUpdateOneWithoutIssuesInput } from "../inputs/RenamedcaseUpdateOneWithoutIssuesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIssueUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  kodeMt?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateOneWithoutIssuesInput, {
    nullable: true
  })
  caseId?: RenamedcaseUpdateOneWithoutIssuesInput | undefined;
}
