import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateNestedOneWithoutCaseReferralInput } from "../inputs/NetworkCreateNestedOneWithoutCaseReferralInput";
import { PersonCreateNestedOneWithoutCaseReferralInput } from "../inputs/PersonCreateNestedOneWithoutCaseReferralInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralCreateWithoutCaseInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglTransfer?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  catatan?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutCaseReferralInput, {
    nullable: true
  })
  client?: PersonCreateNestedOneWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => NetworkCreateNestedOneWithoutCaseReferralInput, {
    nullable: true
  })
  network?: NetworkCreateNestedOneWithoutCaseReferralInput | undefined;
}
