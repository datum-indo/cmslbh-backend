import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DataDictMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fieldNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dataType!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  entity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fieldName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fieldType!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isRepeat!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  linkField!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  linkTable!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  listCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  required!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  validation!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibleSelectQuery!: string | null;
}
