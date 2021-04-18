import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabCreateInput } from "../../../inputs/MtVocabCreateInput";
import { MtVocabUpdateInput } from "../../../inputs/MtVocabUpdateInput";
import { MtVocabWhereUniqueInput } from "../../../inputs/MtVocabWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMtVocabArgs {
  @TypeGraphQL.Field(_type => MtVocabWhereUniqueInput, {
    nullable: false
  })
  where!: MtVocabWhereUniqueInput;

  @TypeGraphQL.Field(_type => MtVocabCreateInput, {
    nullable: false
  })
  create!: MtVocabCreateInput;

  @TypeGraphQL.Field(_type => MtVocabUpdateInput, {
    nullable: false
  })
  update!: MtVocabUpdateInput;
}
