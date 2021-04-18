import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutViolatedrightsInput } from "../inputs/RenamedcaseCreateNestedOneWithoutViolatedrightsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolatedRightCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutViolatedrightsInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutViolatedrightsInput | undefined;
}
