import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseClassificationWhereInput } from "../inputs/CaseClassificationWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseClassificationListRelationFilter {
  @TypeGraphQL.Field(_type => CaseClassificationWhereInput, {
    nullable: true
  })
  every?: CaseClassificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseClassificationWhereInput, {
    nullable: true
  })
  some?: CaseClassificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseClassificationWhereInput, {
    nullable: true
  })
  none?: CaseClassificationWhereInput | undefined;
}
