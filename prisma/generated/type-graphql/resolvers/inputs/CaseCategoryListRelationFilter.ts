import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseCategoryWhereInput } from "../inputs/CaseCategoryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseCategoryListRelationFilter {
  @TypeGraphQL.Field(_type => CaseCategoryWhereInput, {
    nullable: true
  })
  every?: CaseCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseCategoryWhereInput, {
    nullable: true
  })
  some?: CaseCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseCategoryWhereInput, {
    nullable: true
  })
  none?: CaseCategoryWhereInput | undefined;
}
