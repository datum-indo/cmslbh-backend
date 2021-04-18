import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseCategoryScalarWhereInput } from "../inputs/CaseCategoryScalarWhereInput";
import { CaseCategoryUpdateManyMutationInput } from "../inputs/CaseCategoryUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseCategoryUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseCategoryScalarWhereInput, {
    nullable: false
  })
  where!: CaseCategoryScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseCategoryUpdateManyMutationInput;
}
