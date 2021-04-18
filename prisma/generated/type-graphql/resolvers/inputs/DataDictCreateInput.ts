import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictLocalCreateNestedManyWithoutDataDictInput } from "../inputs/DataDictLocalCreateNestedManyWithoutDataDictInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fieldNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dataType?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  entity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fieldName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fieldType?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isRepeat?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  linkField?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  linkTable?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  listCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  required?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  validation?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibleSelectQuery?: string | undefined;

  @TypeGraphQL.Field(_type => DataDictLocalCreateNestedManyWithoutDataDictInput, {
    nullable: true
  })
  DataDictLocal?: DataDictLocalCreateNestedManyWithoutDataDictInput | undefined;
}
