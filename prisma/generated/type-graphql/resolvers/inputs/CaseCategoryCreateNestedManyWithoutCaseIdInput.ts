import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseCategoryCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseCategoryCreateOrConnectWithoutCaseIdInput";
import { CaseCategoryCreateWithoutCaseIdInput } from "../inputs/CaseCategoryCreateWithoutCaseIdInput";
import { CaseCategoryWhereUniqueInput } from "../inputs/CaseCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseCategoryCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseCategoryCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseCategoryCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseCategoryCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseCategoryWhereUniqueInput[] | undefined;
}
