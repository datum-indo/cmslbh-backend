import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAppWhereInput } from "../inputs/LogRequestAppWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppListRelationFilter {
  @TypeGraphQL.Field(_type => LogRequestAppWhereInput, {
    nullable: true
  })
  every?: LogRequestAppWhereInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestAppWhereInput, {
    nullable: true
  })
  some?: LogRequestAppWhereInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestAppWhereInput, {
    nullable: true
  })
  none?: LogRequestAppWhereInput | undefined;
}
