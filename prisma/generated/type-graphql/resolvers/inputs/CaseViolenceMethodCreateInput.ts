import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutViolenceMethodsInput } from "../inputs/RenamedcaseCreateNestedOneWithoutViolenceMethodsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolenceMethodCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutViolenceMethodsInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutViolenceMethodsInput | undefined;
}
