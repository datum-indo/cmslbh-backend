import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonDocumentWhereInput } from "../inputs/PersonDocumentWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonDocumentListRelationFilter {
  @TypeGraphQL.Field(_type => PersonDocumentWhereInput, {
    nullable: true
  })
  every?: PersonDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonDocumentWhereInput, {
    nullable: true
  })
  some?: PersonDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonDocumentWhereInput, {
    nullable: true
  })
  none?: PersonDocumentWhereInput | undefined;
}
