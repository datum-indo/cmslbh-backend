import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseDocumentWhereUniqueInput } from "../../../inputs/CaseDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseDocumentArgs {
  @TypeGraphQL.Field(_type => CaseDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: CaseDocumentWhereUniqueInput;
}
