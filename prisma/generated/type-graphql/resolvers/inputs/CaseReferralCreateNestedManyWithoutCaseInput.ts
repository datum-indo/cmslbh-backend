import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralCreateOrConnectWithoutCaseInput } from "../inputs/CaseReferralCreateOrConnectWithoutCaseInput";
import { CaseReferralCreateWithoutCaseInput } from "../inputs/CaseReferralCreateWithoutCaseInput";
import { CaseReferralWhereUniqueInput } from "../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralCreateNestedManyWithoutCaseInput {
  @TypeGraphQL.Field(_type => [CaseReferralCreateWithoutCaseInput], {
    nullable: true
  })
  create?: CaseReferralCreateWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralCreateOrConnectWithoutCaseInput], {
    nullable: true
  })
  connectOrCreate?: CaseReferralCreateOrConnectWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseReferralWhereUniqueInput[] | undefined;
}
