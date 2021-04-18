import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class SrcAnalisa {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  group?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  field?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kode_list?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alias?: string | null;
}
