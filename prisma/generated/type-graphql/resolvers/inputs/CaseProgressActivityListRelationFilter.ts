import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityWhereInput } from "../inputs/CaseProgressActivityWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityListRelationFilter {
  @TypeGraphQL.Field(_type => CaseProgressActivityWhereInput, {
    nullable: true
  })
  every?: CaseProgressActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityWhereInput, {
    nullable: true
  })
  some?: CaseProgressActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityWhereInput, {
    nullable: true
  })
  none?: CaseProgressActivityWhereInput | undefined;
}
