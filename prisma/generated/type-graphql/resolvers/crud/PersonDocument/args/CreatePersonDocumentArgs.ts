import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonDocumentCreateInput } from "../../../inputs/PersonDocumentCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePersonDocumentArgs {
  @TypeGraphQL.Field(_type => PersonDocumentCreateInput, {
    nullable: false
  })
  data!: PersonDocumentCreateInput;
}
