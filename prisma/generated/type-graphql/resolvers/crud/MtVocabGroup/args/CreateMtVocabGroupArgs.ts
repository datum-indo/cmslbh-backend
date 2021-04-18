import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabGroupCreateInput } from "../../../inputs/MtVocabGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMtVocabGroupArgs {
  @TypeGraphQL.Field(_type => MtVocabGroupCreateInput, {
    nullable: false
  })
  data!: MtVocabGroupCreateInput;
}
