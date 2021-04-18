import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabOrderByInput } from "../../../inputs/MtVocabOrderByInput";
import { MtVocabWhereInput } from "../../../inputs/MtVocabWhereInput";
import { MtVocabWhereUniqueInput } from "../../../inputs/MtVocabWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMtVocabArgs {
  @TypeGraphQL.Field(_type => MtVocabWhereInput, {
    nullable: true
  })
  where?: MtVocabWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MtVocabOrderByInput], {
    nullable: true
  })
  orderBy?: MtVocabOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => MtVocabWhereUniqueInput, {
    nullable: true
  })
  cursor?: MtVocabWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
