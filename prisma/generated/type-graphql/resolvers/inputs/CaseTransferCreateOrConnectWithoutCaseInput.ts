import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferCreateWithoutCaseInput } from "../inputs/CaseTransferCreateWithoutCaseInput";
import { CaseTransferWhereUniqueInput } from "../inputs/CaseTransferWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferCreateOrConnectWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseTransferWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseTransferCreateWithoutCaseInput, {
    nullable: false
  })
  create!: CaseTransferCreateWithoutCaseInput;
}
