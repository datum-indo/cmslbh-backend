import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressWhereInput } from "../inputs/CaseProgressWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressRelationFilter {
  @TypeGraphQL.Field(_type => CaseProgressWhereInput, {
    nullable: true
  })
  is?: CaseProgressWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressWhereInput, {
    nullable: true
  })
  isNot?: CaseProgressWhereInput | undefined;
}
