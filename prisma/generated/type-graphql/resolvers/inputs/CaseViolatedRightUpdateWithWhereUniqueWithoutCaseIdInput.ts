import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolatedRightUpdateWithoutCaseIdInput } from "../inputs/CaseViolatedRightUpdateWithoutCaseIdInput";
import { CaseViolatedRightWhereUniqueInput } from "../inputs/CaseViolatedRightWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseViolatedRightWhereUniqueInput, {
    nullable: false
  })
  where!: CaseViolatedRightWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseViolatedRightUpdateWithoutCaseIdInput, {
    nullable: false
  })
  data!: CaseViolatedRightUpdateWithoutCaseIdInput;
}
