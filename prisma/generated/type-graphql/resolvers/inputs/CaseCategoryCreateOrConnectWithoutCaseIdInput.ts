import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseCategoryCreateWithoutCaseIdInput } from "../inputs/CaseCategoryCreateWithoutCaseIdInput";
import { CaseCategoryWhereUniqueInput } from "../inputs/CaseCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseCategoryCreateOrConnectWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CaseCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseCategoryCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseCategoryCreateWithoutCaseIdInput;
}
