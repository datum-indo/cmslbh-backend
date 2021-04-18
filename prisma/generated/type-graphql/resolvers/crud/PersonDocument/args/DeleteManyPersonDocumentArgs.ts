import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonDocumentWhereInput } from "../../../inputs/PersonDocumentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPersonDocumentArgs {
  @TypeGraphQL.Field(_type => PersonDocumentWhereInput, {
    nullable: true
  })
  where?: PersonDocumentWhereInput | undefined;
}
