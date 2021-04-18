import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityLitWhereInput } from "../inputs/CaseProgressActivityLitWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityLitListRelationFilter {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereInput, {
    nullable: true
  })
  every?: CaseProgressActivityLitWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereInput, {
    nullable: true
  })
  some?: CaseProgressActivityLitWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereInput, {
    nullable: true
  })
  none?: CaseProgressActivityLitWhereInput | undefined;
}
