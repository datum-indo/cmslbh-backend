import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabWhereInput } from "../../../inputs/MtVocabWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMtVocabArgs {
  @TypeGraphQL.Field(_type => MtVocabWhereInput, {
    nullable: true
  })
  where?: MtVocabWhereInput | undefined;
}
