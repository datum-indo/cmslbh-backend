import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutPelakusInput } from "../inputs/RenamedcaseCreateNestedOneWithoutPelakusInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuCreateWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisPelaku?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutPelakusInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutPelakusInput | undefined;
}
