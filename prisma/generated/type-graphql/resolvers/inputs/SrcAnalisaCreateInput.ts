import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SrcAnalisaCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  group?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  field?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kode_list?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alias?: string | undefined;
}
