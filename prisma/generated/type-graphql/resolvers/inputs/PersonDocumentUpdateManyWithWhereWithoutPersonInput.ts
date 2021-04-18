import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonDocumentScalarWhereInput } from "../inputs/PersonDocumentScalarWhereInput";
import { PersonDocumentUpdateManyMutationInput } from "../inputs/PersonDocumentUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonDocumentUpdateManyWithWhereWithoutPersonInput {
  @TypeGraphQL.Field(_type => PersonDocumentScalarWhereInput, {
    nullable: false
  })
  where!: PersonDocumentScalarWhereInput;

  @TypeGraphQL.Field(_type => PersonDocumentUpdateManyMutationInput, {
    nullable: false
  })
  data!: PersonDocumentUpdateManyMutationInput;
}
