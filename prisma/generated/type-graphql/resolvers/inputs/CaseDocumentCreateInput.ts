import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutDocumentsInput } from "../inputs/RenamedcaseCreateNestedOneWithoutDocumentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseDocumentCreateInput {
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
  jenisDokumen?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  judulDokumen?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filename?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutDocumentsInput, {
    nullable: true
  })
  case?: RenamedcaseCreateNestedOneWithoutDocumentsInput | undefined;
}
