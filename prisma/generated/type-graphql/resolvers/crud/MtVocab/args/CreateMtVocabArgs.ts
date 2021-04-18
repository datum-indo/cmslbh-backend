import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabCreateInput } from "../../../inputs/MtVocabCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMtVocabArgs {
  @TypeGraphQL.Field(_type => MtVocabCreateInput, {
    nullable: false
  })
  data!: MtVocabCreateInput;
}
