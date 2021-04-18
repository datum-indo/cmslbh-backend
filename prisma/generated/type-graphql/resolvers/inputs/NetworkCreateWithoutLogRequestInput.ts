import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralCreateNestedManyWithoutNetworkInput } from "../inputs/CaseReferralCreateNestedManyWithoutNetworkInput";
import { CaseTransferCreateNestedManyWithoutNetworkInput } from "../inputs/CaseTransferCreateNestedManyWithoutNetworkInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkCreateWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contactPerson?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  noContact?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  provinceId?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  regencyId?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CaseReferralCreateNestedManyWithoutNetworkInput, {
    nullable: true
  })
  CaseReferral?: CaseReferralCreateNestedManyWithoutNetworkInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferCreateNestedManyWithoutNetworkInput, {
    nullable: true
  })
  CaseTransfer?: CaseTransferCreateNestedManyWithoutNetworkInput | undefined;
}
