import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseModusCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseModusCreateOrConnectWithoutCaseIdInput";
import { CaseModusCreateWithoutCaseIdInput } from "../inputs/CaseModusCreateWithoutCaseIdInput";
import { CaseModusWhereUniqueInput } from "../inputs/CaseModusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseModusCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseModusCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseModusCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseModusCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseModusWhereUniqueInput[] | undefined;
}
