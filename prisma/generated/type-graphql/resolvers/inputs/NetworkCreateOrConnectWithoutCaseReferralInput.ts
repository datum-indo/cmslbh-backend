import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateWithoutCaseReferralInput } from "../inputs/NetworkCreateWithoutCaseReferralInput";
import { NetworkWhereUniqueInput } from "../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkCreateOrConnectWithoutCaseReferralInput {
  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: false
  })
  where!: NetworkWhereUniqueInput;

  @TypeGraphQL.Field(_type => NetworkCreateWithoutCaseReferralInput, {
    nullable: false
  })
  create!: NetworkCreateWithoutCaseReferralInput;
}
