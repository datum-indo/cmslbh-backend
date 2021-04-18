import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferReferralWhereInput } from "../inputs/CaseTransferReferralWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferReferralListRelationFilter {
  @TypeGraphQL.Field(_type => CaseTransferReferralWhereInput, {
    nullable: true
  })
  every?: CaseTransferReferralWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferReferralWhereInput, {
    nullable: true
  })
  some?: CaseTransferReferralWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferReferralWhereInput, {
    nullable: true
  })
  none?: CaseTransferReferralWhereInput | undefined;
}
