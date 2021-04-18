import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkWhereInput } from "../inputs/NetworkWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkRelationFilter {
  @TypeGraphQL.Field(_type => NetworkWhereInput, {
    nullable: true
  })
  is?: NetworkWhereInput | undefined;

  @TypeGraphQL.Field(_type => NetworkWhereInput, {
    nullable: true
  })
  isNot?: NetworkWhereInput | undefined;
}
