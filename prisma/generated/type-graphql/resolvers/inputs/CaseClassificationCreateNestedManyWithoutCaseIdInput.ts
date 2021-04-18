import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseClassificationCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseClassificationCreateOrConnectWithoutCaseIdInput";
import { CaseClassificationCreateWithoutCaseIdInput } from "../inputs/CaseClassificationCreateWithoutCaseIdInput";
import { CaseClassificationWhereUniqueInput } from "../inputs/CaseClassificationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseClassificationCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseClassificationCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseClassificationCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseClassificationCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseClassificationWhereUniqueInput[] | undefined;
}
