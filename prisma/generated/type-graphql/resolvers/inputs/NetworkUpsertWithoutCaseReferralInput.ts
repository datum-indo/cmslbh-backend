import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateWithoutCaseReferralInput } from "../inputs/NetworkCreateWithoutCaseReferralInput";
import { NetworkUpdateWithoutCaseReferralInput } from "../inputs/NetworkUpdateWithoutCaseReferralInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkUpsertWithoutCaseReferralInput {
  @TypeGraphQL.Field(_type => NetworkUpdateWithoutCaseReferralInput, {
    nullable: false
  })
  update!: NetworkUpdateWithoutCaseReferralInput;

  @TypeGraphQL.Field(_type => NetworkCreateWithoutCaseReferralInput, {
    nullable: false
  })
  create!: NetworkCreateWithoutCaseReferralInput;
}
