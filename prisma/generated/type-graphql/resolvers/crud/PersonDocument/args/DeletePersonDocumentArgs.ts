import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonDocumentWhereUniqueInput } from "../../../inputs/PersonDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePersonDocumentArgs {
  @TypeGraphQL.Field(_type => PersonDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PersonDocumentWhereUniqueInput;
}
