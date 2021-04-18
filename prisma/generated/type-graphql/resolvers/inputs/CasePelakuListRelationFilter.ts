import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuWhereInput } from "../inputs/CasePelakuWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuListRelationFilter {
  @TypeGraphQL.Field(_type => CasePelakuWhereInput, {
    nullable: true
  })
  every?: CasePelakuWhereInput | undefined;

  @TypeGraphQL.Field(_type => CasePelakuWhereInput, {
    nullable: true
  })
  some?: CasePelakuWhereInput | undefined;

  @TypeGraphQL.Field(_type => CasePelakuWhereInput, {
    nullable: true
  })
  none?: CasePelakuWhereInput | undefined;
}
