import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseKorbanUpdateWithoutCaseIdInput } from "../inputs/CaseKorbanUpdateWithoutCaseIdInput";
import { CaseKorbanWhereUniqueInput } from "../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseKorbanWhereUniqueInput, {
    nullable: false
  })
  where!: CaseKorbanWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseKorbanUpdateWithoutCaseIdInput, {
    nullable: false
  })
  data!: CaseKorbanUpdateWithoutCaseIdInput;
}
