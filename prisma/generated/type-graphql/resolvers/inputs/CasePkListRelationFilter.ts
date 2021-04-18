import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkWhereInput } from "../inputs/CasePkWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkListRelationFilter {
  @TypeGraphQL.Field(_type => CasePkWhereInput, {
    nullable: true
  })
  every?: CasePkWhereInput | undefined;

  @TypeGraphQL.Field(_type => CasePkWhereInput, {
    nullable: true
  })
  some?: CasePkWhereInput | undefined;

  @TypeGraphQL.Field(_type => CasePkWhereInput, {
    nullable: true
  })
  none?: CasePkWhereInput | undefined;
}
