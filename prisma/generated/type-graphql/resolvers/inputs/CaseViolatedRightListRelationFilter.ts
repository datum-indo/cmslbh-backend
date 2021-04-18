import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolatedRightWhereInput } from "../inputs/CaseViolatedRightWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolatedRightListRelationFilter {
  @TypeGraphQL.Field(_type => CaseViolatedRightWhereInput, {
    nullable: true
  })
  every?: CaseViolatedRightWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseViolatedRightWhereInput, {
    nullable: true
  })
  some?: CaseViolatedRightWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseViolatedRightWhereInput, {
    nullable: true
  })
  none?: CaseViolatedRightWhereInput | undefined;
}
