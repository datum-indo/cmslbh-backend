import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseModusCreateWithoutCaseIdInput } from "../inputs/CaseModusCreateWithoutCaseIdInput";
import { CaseModusWhereUniqueInput } from "../inputs/CaseModusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseModusCreateOrConnectWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseModusWhereUniqueInput, {
    nullable: false
  })
  where!: CaseModusWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseModusCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseModusCreateWithoutCaseIdInput;
}
