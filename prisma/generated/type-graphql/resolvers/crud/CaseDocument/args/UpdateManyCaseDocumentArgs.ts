import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseDocumentUpdateManyMutationInput } from "../../../inputs/CaseDocumentUpdateManyMutationInput";
import { CaseDocumentWhereInput } from "../../../inputs/CaseDocumentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseDocumentArgs {
  @TypeGraphQL.Field(_type => CaseDocumentUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseDocumentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseDocumentWhereInput, {
    nullable: true
  })
  where?: CaseDocumentWhereInput | undefined;
}
