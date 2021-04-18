import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseCategoryCreateWithoutCaseIdInput } from "../inputs/CaseCategoryCreateWithoutCaseIdInput";
import { CaseCategoryUpdateWithoutCaseIdInput } from "../inputs/CaseCategoryUpdateWithoutCaseIdInput";
import { CaseCategoryWhereUniqueInput } from "../inputs/CaseCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseCategoryUpsertWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CaseCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseCategoryUpdateWithoutCaseIdInput, {
    nullable: false
  })
  update!: CaseCategoryUpdateWithoutCaseIdInput;

  @TypeGraphQL.Field(_type => CaseCategoryCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseCategoryCreateWithoutCaseIdInput;
}
