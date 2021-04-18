import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseProgressActivityCreateOrConnectWithoutCaseIdInput";
import { CaseProgressActivityCreateWithoutCaseIdInput } from "../inputs/CaseProgressActivityCreateWithoutCaseIdInput";
import { CaseProgressActivityWhereUniqueInput } from "../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseProgressActivityCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseProgressActivityCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseProgressActivityCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseProgressActivityWhereUniqueInput[] | undefined;
}
