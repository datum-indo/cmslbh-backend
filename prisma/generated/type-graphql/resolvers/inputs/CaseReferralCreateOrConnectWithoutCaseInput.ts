import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralCreateWithoutCaseInput } from "../inputs/CaseReferralCreateWithoutCaseInput";
import { CaseReferralWhereUniqueInput } from "../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralCreateOrConnectWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseReferralCreateWithoutCaseInput, {
    nullable: false
  })
  create!: CaseReferralCreateWithoutCaseInput;
}
