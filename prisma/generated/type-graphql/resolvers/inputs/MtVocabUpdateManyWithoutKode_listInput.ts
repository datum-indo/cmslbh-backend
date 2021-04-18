import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabCreateOrConnectWithoutKode_listInput } from "../inputs/MtVocabCreateOrConnectWithoutKode_listInput";
import { MtVocabCreateWithoutKode_listInput } from "../inputs/MtVocabCreateWithoutKode_listInput";
import { MtVocabScalarWhereInput } from "../inputs/MtVocabScalarWhereInput";
import { MtVocabUpdateManyWithWhereWithoutKode_listInput } from "../inputs/MtVocabUpdateManyWithWhereWithoutKode_listInput";
import { MtVocabUpdateWithWhereUniqueWithoutKode_listInput } from "../inputs/MtVocabUpdateWithWhereUniqueWithoutKode_listInput";
import { MtVocabUpsertWithWhereUniqueWithoutKode_listInput } from "../inputs/MtVocabUpsertWithWhereUniqueWithoutKode_listInput";
import { MtVocabWhereUniqueInput } from "../inputs/MtVocabWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabUpdateManyWithoutKode_listInput {
  @TypeGraphQL.Field(_type => [MtVocabCreateWithoutKode_listInput], {
    nullable: true
  })
  create?: MtVocabCreateWithoutKode_listInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabCreateOrConnectWithoutKode_listInput], {
    nullable: true
  })
  connectOrCreate?: MtVocabCreateOrConnectWithoutKode_listInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabUpsertWithWhereUniqueWithoutKode_listInput], {
    nullable: true
  })
  upsert?: MtVocabUpsertWithWhereUniqueWithoutKode_listInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabWhereUniqueInput], {
    nullable: true
  })
  connect?: MtVocabWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabWhereUniqueInput], {
    nullable: true
  })
  set?: MtVocabWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MtVocabWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabWhereUniqueInput], {
    nullable: true
  })
  delete?: MtVocabWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabUpdateWithWhereUniqueWithoutKode_listInput], {
    nullable: true
  })
  update?: MtVocabUpdateWithWhereUniqueWithoutKode_listInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabUpdateManyWithWhereWithoutKode_listInput], {
    nullable: true
  })
  updateMany?: MtVocabUpdateManyWithWhereWithoutKode_listInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MtVocabScalarWhereInput[] | undefined;
}
