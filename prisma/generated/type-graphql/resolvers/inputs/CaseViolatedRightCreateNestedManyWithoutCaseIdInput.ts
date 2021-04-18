import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolatedRightCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseViolatedRightCreateOrConnectWithoutCaseIdInput";
import { CaseViolatedRightCreateWithoutCaseIdInput } from "../inputs/CaseViolatedRightCreateWithoutCaseIdInput";
import { CaseViolatedRightWhereUniqueInput } from "../inputs/CaseViolatedRightWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolatedRightCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseViolatedRightCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseViolatedRightCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseViolatedRightCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseViolatedRightWhereUniqueInput[] | undefined;
}
