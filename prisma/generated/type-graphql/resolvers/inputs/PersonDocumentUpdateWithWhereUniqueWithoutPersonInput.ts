import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonDocumentUpdateWithoutPersonInput } from "../inputs/PersonDocumentUpdateWithoutPersonInput";
import { PersonDocumentWhereUniqueInput } from "../inputs/PersonDocumentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonDocumentUpdateWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => PersonDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PersonDocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonDocumentUpdateWithoutPersonInput, {
    nullable: false
  })
  data!: PersonDocumentUpdateWithoutPersonInput;
}
