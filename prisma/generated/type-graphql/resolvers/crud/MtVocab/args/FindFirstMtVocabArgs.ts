import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabOrderByInput } from "../../../inputs/MtVocabOrderByInput";
import { MtVocabWhereInput } from "../../../inputs/MtVocabWhereInput";
import { MtVocabWhereUniqueInput } from "../../../inputs/MtVocabWhereUniqueInput";
import { MtVocabScalarFieldEnum } from "../../../../enums/MtVocabScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMtVocabArgs {
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

  @TypeGraphQL.Field(_type => [MtVocabScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"KODE" | "kode_induk" | "level" | "sembunyikan" | "teks" | "urutan" | "kode_list_group"> | undefined;
}
