import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityUpdateWithoutCaseIdInput } from "../inputs/CaseProgressActivityUpdateWithoutCaseIdInput";
import { CaseProgressActivityWhereUniqueInput } from "../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateWithoutCaseIdInput, {
    nullable: false
  })
  data!: CaseProgressActivityUpdateWithoutCaseIdInput;
}
