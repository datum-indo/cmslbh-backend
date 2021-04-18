import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseModusUpdateWithoutCaseIdInput } from "../inputs/CaseModusUpdateWithoutCaseIdInput";
import { CaseModusWhereUniqueInput } from "../inputs/CaseModusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseModusUpdateWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseModusWhereUniqueInput, {
    nullable: false
  })
  where!: CaseModusWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseModusUpdateWithoutCaseIdInput, {
    nullable: false
  })
  data!: CaseModusUpdateWithoutCaseIdInput;
}
