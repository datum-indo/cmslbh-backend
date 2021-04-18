import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutTransferreferralsInput } from "../inputs/RenamedcaseCreateNestedOneWithoutTransferreferralsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferReferralCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  catatan?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  document?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisTransferReferral?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  networkId?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglTransferReferral?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutTransferreferralsInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutTransferreferralsInput | undefined;
}
