import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DataDictLocalMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lang!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fieldNumber!: string | null;
}
