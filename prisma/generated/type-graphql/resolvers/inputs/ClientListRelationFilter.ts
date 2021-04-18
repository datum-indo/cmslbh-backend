import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientWhereInput } from "../inputs/ClientWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientListRelationFilter {
  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  every?: ClientWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  some?: ClientWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  none?: ClientWhereInput | undefined;
}
