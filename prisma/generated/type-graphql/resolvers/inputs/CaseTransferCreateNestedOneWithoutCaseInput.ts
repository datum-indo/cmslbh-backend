import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferCreateOrConnectWithoutCaseInput } from "../inputs/CaseTransferCreateOrConnectWithoutCaseInput";
import { CaseTransferCreateWithoutCaseInput } from "../inputs/CaseTransferCreateWithoutCaseInput";
import { CaseTransferWhereUniqueInput } from "../inputs/CaseTransferWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferCreateNestedOneWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseTransferCreateWithoutCaseInput, {
    nullable: true
  })
  create?: CaseTransferCreateWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferCreateOrConnectWithoutCaseInput, {
    nullable: true
  })
  connectOrCreate?: CaseTransferCreateOrConnectWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferWhereUniqueInput, {
    nullable: true
  })
  connect?: CaseTransferWhereUniqueInput | undefined;
}
