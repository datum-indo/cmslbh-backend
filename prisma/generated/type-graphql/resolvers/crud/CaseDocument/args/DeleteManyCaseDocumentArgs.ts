import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseDocumentWhereInput } from "../../../inputs/CaseDocumentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseDocumentArgs {
  @TypeGraphQL.Field(_type => CaseDocumentWhereInput, {
    nullable: true
  })
  where?: CaseDocumentWhereInput | undefined;
}
