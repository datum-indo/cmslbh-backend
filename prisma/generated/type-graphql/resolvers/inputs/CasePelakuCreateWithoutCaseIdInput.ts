import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutCasePelakuInput } from "../inputs/PersonCreateNestedOneWithoutCasePelakuInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuCreateWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisPelaku?: string | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutCasePelakuInput, {
    nullable: true
  })
  personId?: PersonCreateNestedOneWithoutCasePelakuInput | undefined;
}
