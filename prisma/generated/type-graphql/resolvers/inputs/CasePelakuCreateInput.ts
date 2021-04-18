import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutCasePelakuInput } from "../inputs/PersonCreateNestedOneWithoutCasePelakuInput";
import { RenamedcaseCreateNestedOneWithoutPelakusInput } from "../inputs/RenamedcaseCreateNestedOneWithoutPelakusInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisPelaku?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutPelakusInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutPelakusInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutCasePelakuInput, {
    nullable: true
  })
  personId?: PersonCreateNestedOneWithoutCasePelakuInput | undefined;
}
