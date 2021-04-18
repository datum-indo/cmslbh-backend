import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferCreateWithoutCaseInput } from "../inputs/CaseTransferCreateWithoutCaseInput";
import { CaseTransferUpdateWithoutCaseInput } from "../inputs/CaseTransferUpdateWithoutCaseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferUpsertWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseTransferUpdateWithoutCaseInput, {
    nullable: false
  })
  update!: CaseTransferUpdateWithoutCaseInput;

  @TypeGraphQL.Field(_type => CaseTransferCreateWithoutCaseInput, {
    nullable: false
  })
  create!: CaseTransferCreateWithoutCaseInput;
}
