import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateOrConnectWithoutCaseReferralInput } from "../inputs/NetworkCreateOrConnectWithoutCaseReferralInput";
import { NetworkCreateWithoutCaseReferralInput } from "../inputs/NetworkCreateWithoutCaseReferralInput";
import { NetworkUpdateWithoutCaseReferralInput } from "../inputs/NetworkUpdateWithoutCaseReferralInput";
import { NetworkUpsertWithoutCaseReferralInput } from "../inputs/NetworkUpsertWithoutCaseReferralInput";
import { NetworkWhereUniqueInput } from "../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkUpdateOneWithoutCaseReferralInput {
  @TypeGraphQL.Field(_type => NetworkCreateWithoutCaseReferralInput, {
    nullable: true
  })
  create?: NetworkCreateWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => NetworkCreateOrConnectWithoutCaseReferralInput, {
    nullable: true
  })
  connectOrCreate?: NetworkCreateOrConnectWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => NetworkUpsertWithoutCaseReferralInput, {
    nullable: true
  })
  upsert?: NetworkUpsertWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: true
  })
  connect?: NetworkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => NetworkUpdateWithoutCaseReferralInput, {
    nullable: true
  })
  update?: NetworkUpdateWithoutCaseReferralInput | undefined;
}
