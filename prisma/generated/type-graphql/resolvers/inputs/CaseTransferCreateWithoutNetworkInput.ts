import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutTransferInput } from "../inputs/RenamedcaseCreateNestedOneWithoutTransferInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferCreateWithoutNetworkInput {
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

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutTransferInput, {
    nullable: true
  })
  case?: RenamedcaseCreateNestedOneWithoutTransferInput | undefined;
}
