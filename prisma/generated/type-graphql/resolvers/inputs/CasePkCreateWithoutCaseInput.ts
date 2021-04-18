import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCasePkInput } from "../inputs/UserCreateNestedOneWithoutCasePkInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkCreateWithoutCaseInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCasePkInput, {
    nullable: true
  })
  ppPendamping?: UserCreateNestedOneWithoutCasePkInput | undefined;
}
