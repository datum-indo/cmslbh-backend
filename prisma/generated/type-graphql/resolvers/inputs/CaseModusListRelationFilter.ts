import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseModusWhereInput } from "../inputs/CaseModusWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseModusListRelationFilter {
  @TypeGraphQL.Field(_type => CaseModusWhereInput, {
    nullable: true
  })
  every?: CaseModusWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseModusWhereInput, {
    nullable: true
  })
  some?: CaseModusWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseModusWhereInput, {
    nullable: true
  })
  none?: CaseModusWhereInput | undefined;
}
