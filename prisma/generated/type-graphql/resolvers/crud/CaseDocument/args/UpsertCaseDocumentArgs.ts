import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseDocumentCreateInput } from "../../../inputs/CaseDocumentCreateInput";
import { CaseDocumentUpdateInput } from "../../../inputs/CaseDocumentUpdateInput";
import { CaseDocumentWhereUniqueInput } from "../../../inputs/CaseDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseDocumentArgs {
  @TypeGraphQL.Field(_type => CaseDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: CaseDocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseDocumentCreateInput, {
    nullable: false
  })
  create!: CaseDocumentCreateInput;

  @TypeGraphQL.Field(_type => CaseDocumentUpdateInput, {
    nullable: false
  })
  update!: CaseDocumentUpdateInput;
}
