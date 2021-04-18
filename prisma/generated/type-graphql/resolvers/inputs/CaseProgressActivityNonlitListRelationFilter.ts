import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityNonlitWhereInput } from "../inputs/CaseProgressActivityNonlitWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityNonlitListRelationFilter {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereInput, {
    nullable: true
  })
  every?: CaseProgressActivityNonlitWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereInput, {
    nullable: true
  })
  some?: CaseProgressActivityNonlitWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereInput, {
    nullable: true
  })
  none?: CaseProgressActivityNonlitWhereInput | undefined;
}
