import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseKorbanCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseKorbanCreateOrConnectWithoutCaseIdInput";
import { CaseKorbanCreateWithoutCaseIdInput } from "../inputs/CaseKorbanCreateWithoutCaseIdInput";
import { CaseKorbanWhereUniqueInput } from "../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseKorbanCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseKorbanCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseKorbanCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseKorbanWhereUniqueInput[] | undefined;
}
