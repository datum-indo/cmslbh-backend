import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MtVocabGroupOrderByInput } from "../../../inputs/MtVocabGroupOrderByInput";
import { MtVocabGroupWhereInput } from "../../../inputs/MtVocabGroupWhereInput";
import { MtVocabGroupWhereUniqueInput } from "../../../inputs/MtVocabGroupWhereUniqueInput";
import { MtVocabGroupScalarFieldEnum } from "../../../../enums/MtVocabGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMtVocabGroupArgs {
  @TypeGraphQL.Field(_type => MtVocabGroupWhereInput, {
    nullable: true
  })
  where?: MtVocabGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MtVocabGroupOrderByInput], {
    nullable: true
  })
  orderBy?: MtVocabGroupOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => MtVocabGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: MtVocabGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MtVocabGroupScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"kode_list" | "nama_list"> | undefined;
}
