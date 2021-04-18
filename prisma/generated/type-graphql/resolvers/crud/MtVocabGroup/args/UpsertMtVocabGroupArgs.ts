import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabGroupCreateInput } from "../../../inputs/MtVocabGroupCreateInput";
import { MtVocabGroupUpdateInput } from "../../../inputs/MtVocabGroupUpdateInput";
import { MtVocabGroupWhereUniqueInput } from "../../../inputs/MtVocabGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMtVocabGroupArgs {
  @TypeGraphQL.Field(_type => MtVocabGroupWhereUniqueInput, {
    nullable: false
  })
  where!: MtVocabGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => MtVocabGroupCreateInput, {
    nullable: false
  })
  create!: MtVocabGroupCreateInput;

  @TypeGraphQL.Field(_type => MtVocabGroupUpdateInput, {
    nullable: false
  })
  update!: MtVocabGroupUpdateInput;
}
