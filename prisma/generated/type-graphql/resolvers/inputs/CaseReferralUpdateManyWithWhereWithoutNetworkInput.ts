import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralScalarWhereInput } from "../inputs/CaseReferralScalarWhereInput";
import { CaseReferralUpdateManyMutationInput } from "../inputs/CaseReferralUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralUpdateManyWithWhereWithoutNetworkInput {
  @TypeGraphQL.Field(_type => CaseReferralScalarWhereInput, {
    nullable: false
  })
  where!: CaseReferralScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseReferralUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseReferralUpdateManyMutationInput;
}
