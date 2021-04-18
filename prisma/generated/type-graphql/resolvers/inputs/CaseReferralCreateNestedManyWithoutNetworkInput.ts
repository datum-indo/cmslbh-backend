import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralCreateOrConnectWithoutNetworkInput } from "../inputs/CaseReferralCreateOrConnectWithoutNetworkInput";
import { CaseReferralCreateWithoutNetworkInput } from "../inputs/CaseReferralCreateWithoutNetworkInput";
import { CaseReferralWhereUniqueInput } from "../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralCreateNestedManyWithoutNetworkInput {
  @TypeGraphQL.Field(_type => [CaseReferralCreateWithoutNetworkInput], {
    nullable: true
  })
  create?: CaseReferralCreateWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralCreateOrConnectWithoutNetworkInput], {
    nullable: true
  })
  connectOrCreate?: CaseReferralCreateOrConnectWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseReferralWhereUniqueInput[] | undefined;
}
