import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabWhereUniqueInput } from "../../../inputs/MtVocabWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMtVocabArgs {
  @TypeGraphQL.Field(_type => MtVocabWhereUniqueInput, {
    nullable: false
  })
  where!: MtVocabWhereUniqueInput;
}
