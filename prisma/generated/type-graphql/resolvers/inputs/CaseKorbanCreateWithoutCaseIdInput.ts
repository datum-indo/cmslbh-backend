import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutCaseKorbanInput } from "../inputs/PersonCreateNestedOneWithoutCaseKorbanInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanCreateWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutCaseKorbanInput, {
    nullable: true
  })
  personId?: PersonCreateNestedOneWithoutCaseKorbanInput | undefined;
}
