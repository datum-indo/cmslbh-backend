import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabUpdateManyMutationInput } from "../../../inputs/MtVocabUpdateManyMutationInput";
import { MtVocabWhereInput } from "../../../inputs/MtVocabWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMtVocabArgs {
  @TypeGraphQL.Field(_type => MtVocabUpdateManyMutationInput, {
    nullable: false
  })
  data!: MtVocabUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MtVocabWhereInput, {
    nullable: true
  })
  where?: MtVocabWhereInput | undefined;
}
