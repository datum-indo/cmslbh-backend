import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateOrConnectWithoutCaseReferralInput } from "../inputs/NetworkCreateOrConnectWithoutCaseReferralInput";
import { NetworkCreateWithoutCaseReferralInput } from "../inputs/NetworkCreateWithoutCaseReferralInput";
import { NetworkWhereUniqueInput } from "../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkCreateNestedOneWithoutCaseReferralInput {
  @TypeGraphQL.Field(_type => NetworkCreateWithoutCaseReferralInput, {
    nullable: true
  })
  create?: NetworkCreateWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => NetworkCreateOrConnectWithoutCaseReferralInput, {
    nullable: true
  })
  connectOrCreate?: NetworkCreateOrConnectWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: true
  })
  connect?: NetworkWhereUniqueInput | undefined;
}
