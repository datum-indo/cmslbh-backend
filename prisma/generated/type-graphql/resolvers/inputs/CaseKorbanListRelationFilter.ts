import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseKorbanWhereInput } from "../inputs/CaseKorbanWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanListRelationFilter {
  @TypeGraphQL.Field(_type => CaseKorbanWhereInput, {
    nullable: true
  })
  every?: CaseKorbanWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseKorbanWhereInput, {
    nullable: true
  })
  some?: CaseKorbanWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseKorbanWhereInput, {
    nullable: true
  })
  none?: CaseKorbanWhereInput | undefined;
}
