import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseDocumentWhereInput } from "../inputs/CaseDocumentWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseDocumentListRelationFilter {
  @TypeGraphQL.Field(_type => CaseDocumentWhereInput, {
    nullable: true
  })
  every?: CaseDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseDocumentWhereInput, {
    nullable: true
  })
  some?: CaseDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseDocumentWhereInput, {
    nullable: true
  })
  none?: CaseDocumentWhereInput | undefined;
}
