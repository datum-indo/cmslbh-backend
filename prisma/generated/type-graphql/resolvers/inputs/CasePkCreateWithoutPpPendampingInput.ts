import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutPkInput } from "../inputs/RenamedcaseCreateNestedOneWithoutPkInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkCreateWithoutPpPendampingInput {
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
  didampingi?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legalMemo?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notulaRapat?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  targetAkhirAdvokasi?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  strategiAdvokasi?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusAlasanTdk?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglRapat?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutPkInput, {
    nullable: true
  })
  case?: RenamedcaseCreateNestedOneWithoutPkInput | undefined;
}
