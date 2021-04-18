import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonDocumentCreateInput } from "../../../inputs/PersonDocumentCreateInput";
import { PersonDocumentUpdateInput } from "../../../inputs/PersonDocumentUpdateInput";
import { PersonDocumentWhereUniqueInput } from "../../../inputs/PersonDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPersonDocumentArgs {
  @TypeGraphQL.Field(_type => PersonDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PersonDocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonDocumentCreateInput, {
    nullable: false
  })
  create!: PersonDocumentCreateInput;

  @TypeGraphQL.Field(_type => PersonDocumentUpdateInput, {
    nullable: false
  })
  update!: PersonDocumentUpdateInput;
}
