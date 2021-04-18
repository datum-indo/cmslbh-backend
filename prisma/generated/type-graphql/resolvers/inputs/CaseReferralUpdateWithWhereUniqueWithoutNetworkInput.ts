import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralUpdateWithoutNetworkInput } from "../inputs/CaseReferralUpdateWithoutNetworkInput";
import { CaseReferralWhereUniqueInput } from "../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralUpdateWithWhereUniqueWithoutNetworkInput {
  @TypeGraphQL.Field(_type => CaseReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseReferralUpdateWithoutNetworkInput, {
    nullable: false
  })
  data!: CaseReferralUpdateWithoutNetworkInput;
}
