import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseDocumentUpdateInput } from "../../../inputs/CaseDocumentUpdateInput";
import { CaseDocumentWhereUniqueInput } from "../../../inputs/CaseDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseDocumentArgs {
  @TypeGraphQL.Field(_type => CaseDocumentUpdateInput, {
    nullable: false
  })
  data!: CaseDocumentUpdateInput;

  @TypeGraphQL.Field(_type => CaseDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: CaseDocumentWhereUniqueInput;
}
