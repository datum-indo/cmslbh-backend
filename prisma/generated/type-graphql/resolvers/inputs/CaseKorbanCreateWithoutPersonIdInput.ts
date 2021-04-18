import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutKorbansInput } from "../inputs/RenamedcaseCreateNestedOneWithoutKorbansInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanCreateWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutKorbansInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutKorbansInput | undefined;
}
