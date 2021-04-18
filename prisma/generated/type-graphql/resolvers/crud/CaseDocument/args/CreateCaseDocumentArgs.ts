import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseDocumentCreateInput } from "../../../inputs/CaseDocumentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseDocumentArgs {
  @TypeGraphQL.Field(_type => CaseDocumentCreateInput, {
    nullable: false
  })
  data!: CaseDocumentCreateInput;
}
