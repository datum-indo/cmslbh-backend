import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonDocumentUpdateInput } from "../../../inputs/PersonDocumentUpdateInput";
import { PersonDocumentWhereUniqueInput } from "../../../inputs/PersonDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePersonDocumentArgs {
  @TypeGraphQL.Field(_type => PersonDocumentUpdateInput, {
    nullable: false
  })
  data!: PersonDocumentUpdateInput;

  @TypeGraphQL.Field(_type => PersonDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PersonDocumentWhereUniqueInput;
}
