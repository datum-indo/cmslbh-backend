import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateWithoutCaseIdInput } from "../inputs/CaseProgressActivityCreateWithoutCaseIdInput";
import { CaseProgressActivityWhereUniqueInput } from "../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityCreateOrConnectWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseProgressActivityCreateWithoutCaseIdInput;
}
