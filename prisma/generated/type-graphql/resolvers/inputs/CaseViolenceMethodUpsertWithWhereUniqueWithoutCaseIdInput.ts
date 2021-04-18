import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolenceMethodCreateWithoutCaseIdInput } from "../inputs/CaseViolenceMethodCreateWithoutCaseIdInput";
import { CaseViolenceMethodUpdateWithoutCaseIdInput } from "../inputs/CaseViolenceMethodUpdateWithoutCaseIdInput";
import { CaseViolenceMethodWhereUniqueInput } from "../inputs/CaseViolenceMethodWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolenceMethodUpsertWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereUniqueInput, {
    nullable: false
  })
  where!: CaseViolenceMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseViolenceMethodUpdateWithoutCaseIdInput, {
    nullable: false
  })
  update!: CaseViolenceMethodUpdateWithoutCaseIdInput;

  @TypeGraphQL.Field(_type => CaseViolenceMethodCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseViolenceMethodCreateWithoutCaseIdInput;
}
