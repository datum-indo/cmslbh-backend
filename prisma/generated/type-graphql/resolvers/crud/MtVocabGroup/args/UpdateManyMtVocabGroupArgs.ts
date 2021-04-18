import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabGroupUpdateManyMutationInput } from "../../../inputs/MtVocabGroupUpdateManyMutationInput";
import { MtVocabGroupWhereInput } from "../../../inputs/MtVocabGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMtVocabGroupArgs {
  @TypeGraphQL.Field(_type => MtVocabGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: MtVocabGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MtVocabGroupWhereInput, {
    nullable: true
  })
  where?: MtVocabGroupWhereInput | undefined;
}
