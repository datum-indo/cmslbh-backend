import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferReferralScalarWhereInput } from "../inputs/CaseTransferReferralScalarWhereInput";
import { CaseTransferReferralUpdateManyMutationInput } from "../inputs/CaseTransferReferralUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferReferralUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseTransferReferralScalarWhereInput, {
    nullable: false
  })
  where!: CaseTransferReferralScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseTransferReferralUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseTransferReferralUpdateManyMutationInput;
}
