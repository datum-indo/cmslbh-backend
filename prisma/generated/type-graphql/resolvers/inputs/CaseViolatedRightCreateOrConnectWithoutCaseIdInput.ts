import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolatedRightCreateWithoutCaseIdInput } from "../inputs/CaseViolatedRightCreateWithoutCaseIdInput";
import { CaseViolatedRightWhereUniqueInput } from "../inputs/CaseViolatedRightWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolatedRightCreateOrConnectWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseViolatedRightWhereUniqueInput, {
    nullable: false
  })
  where!: CaseViolatedRightWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseViolatedRightCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseViolatedRightCreateWithoutCaseIdInput;
}
