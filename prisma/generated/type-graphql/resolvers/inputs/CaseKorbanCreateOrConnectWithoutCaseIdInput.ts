import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseKorbanCreateWithoutCaseIdInput } from "../inputs/CaseKorbanCreateWithoutCaseIdInput";
import { CaseKorbanWhereUniqueInput } from "../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanCreateOrConnectWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseKorbanWhereUniqueInput, {
    nullable: false
  })
  where!: CaseKorbanWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseKorbanCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseKorbanCreateWithoutCaseIdInput;
}
