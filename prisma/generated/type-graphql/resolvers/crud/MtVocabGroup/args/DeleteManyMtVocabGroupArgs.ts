import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabGroupWhereInput } from "../../../inputs/MtVocabGroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMtVocabGroupArgs {
  @TypeGraphQL.Field(_type => MtVocabGroupWhereInput, {
    nullable: true
  })
  where?: MtVocabGroupWhereInput | undefined;
}
