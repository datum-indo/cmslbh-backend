import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutModusesInput } from "../inputs/RenamedcaseCreateNestedOneWithoutModusesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseModusCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutModusesInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutModusesInput | undefined;
}
