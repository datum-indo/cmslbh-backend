import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralWhereInput } from "../inputs/CaseReferralWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralListRelationFilter {
  @TypeGraphQL.Field(_type => CaseReferralWhereInput, {
    nullable: true
  })
  every?: CaseReferralWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseReferralWhereInput, {
    nullable: true
  })
  some?: CaseReferralWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseReferralWhereInput, {
    nullable: true
  })
  none?: CaseReferralWhereInput | undefined;
}
