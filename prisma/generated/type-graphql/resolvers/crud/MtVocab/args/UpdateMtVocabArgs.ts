import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabUpdateInput } from "../../../inputs/MtVocabUpdateInput";
import { MtVocabWhereUniqueInput } from "../../../inputs/MtVocabWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMtVocabArgs {
  @TypeGraphQL.Field(_type => MtVocabUpdateInput, {
    nullable: false
  })
  data!: MtVocabUpdateInput;

  @TypeGraphQL.Field(_type => MtVocabWhereUniqueInput, {
    nullable: false
  })
  where!: MtVocabWhereUniqueInput;
}
