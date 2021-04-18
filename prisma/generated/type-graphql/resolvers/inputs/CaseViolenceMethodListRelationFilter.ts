import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolenceMethodWhereInput } from "../inputs/CaseViolenceMethodWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolenceMethodListRelationFilter {
  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereInput, {
    nullable: true
  })
  every?: CaseViolenceMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereInput, {
    nullable: true
  })
  some?: CaseViolenceMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereInput, {
    nullable: true
  })
  none?: CaseViolenceMethodWhereInput | undefined;
}
