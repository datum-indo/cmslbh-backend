import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabGroupUpdateInput } from "../../../inputs/MtVocabGroupUpdateInput";
import { MtVocabGroupWhereUniqueInput } from "../../../inputs/MtVocabGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMtVocabGroupArgs {
  @TypeGraphQL.Field(_type => MtVocabGroupUpdateInput, {
    nullable: false
  })
  data!: MtVocabGroupUpdateInput;

  @TypeGraphQL.Field(_type => MtVocabGroupWhereUniqueInput, {
    nullable: false
  })
  where!: MtVocabGroupWhereUniqueInput;
}
