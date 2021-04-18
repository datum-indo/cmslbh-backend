import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabGroupWhereUniqueInput } from "../../../inputs/MtVocabGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMtVocabGroupArgs {
  @TypeGraphQL.Field(_type => MtVocabGroupWhereUniqueInput, {
    nullable: false
  })
  where!: MtVocabGroupWhereUniqueInput;
}
