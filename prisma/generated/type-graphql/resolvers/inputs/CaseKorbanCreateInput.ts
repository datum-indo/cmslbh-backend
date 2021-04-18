import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutCaseKorbanInput } from "../inputs/PersonCreateNestedOneWithoutCaseKorbanInput";
import { RenamedcaseCreateNestedOneWithoutKorbansInput } from "../inputs/RenamedcaseCreateNestedOneWithoutKorbansInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutKorbansInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutKorbansInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutCaseKorbanInput, {
    nullable: true
  })
  personId?: PersonCreateNestedOneWithoutCaseKorbanInput | undefined;
}
