import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolenceMethodCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseViolenceMethodCreateOrConnectWithoutCaseIdInput";
import { CaseViolenceMethodCreateWithoutCaseIdInput } from "../inputs/CaseViolenceMethodCreateWithoutCaseIdInput";
import { CaseViolenceMethodWhereUniqueInput } from "../inputs/CaseViolenceMethodWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolenceMethodCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseViolenceMethodCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseViolenceMethodCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseViolenceMethodCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseViolenceMethodWhereUniqueInput[] | undefined;
}
