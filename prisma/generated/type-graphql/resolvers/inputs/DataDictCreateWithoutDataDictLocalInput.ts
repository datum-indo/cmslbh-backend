import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictCreateWithoutDataDictLocalInput {
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
}
