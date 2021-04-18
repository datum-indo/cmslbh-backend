import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestWhereInput } from "../inputs/LogRequestWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestRelationFilter {
  @TypeGraphQL.Field(_type => LogRequestWhereInput, {
    nullable: true
  })
  is?: LogRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestWhereInput, {
    nullable: true
  })
  isNot?: LogRequestWhereInput | undefined;
}
