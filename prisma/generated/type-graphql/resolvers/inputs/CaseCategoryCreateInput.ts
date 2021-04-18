import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutCategoriesInput } from "../inputs/RenamedcaseCreateNestedOneWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseCategoryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutCategoriesInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutCategoriesInput | undefined;
}
