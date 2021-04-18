import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonDocumentUpdateManyMutationInput } from "../../../inputs/PersonDocumentUpdateManyMutationInput";
import { PersonDocumentWhereInput } from "../../../inputs/PersonDocumentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPersonDocumentArgs {
  @TypeGraphQL.Field(_type => PersonDocumentUpdateManyMutationInput, {
    nullable: false
  })
  data!: PersonDocumentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PersonDocumentWhereInput, {
    nullable: true
  })
  where?: PersonDocumentWhereInput | undefined;
}
