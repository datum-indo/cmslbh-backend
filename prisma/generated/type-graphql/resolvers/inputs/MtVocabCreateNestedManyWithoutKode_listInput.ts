import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabCreateOrConnectWithoutKode_listInput } from "../inputs/MtVocabCreateOrConnectWithoutKode_listInput";
import { MtVocabCreateWithoutKode_listInput } from "../inputs/MtVocabCreateWithoutKode_listInput";
import { MtVocabWhereUniqueInput } from "../inputs/MtVocabWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabCreateNestedManyWithoutKode_listInput {
  @TypeGraphQL.Field(_type => [MtVocabCreateWithoutKode_listInput], {
    nullable: true
  })
  create?: MtVocabCreateWithoutKode_listInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabCreateOrConnectWithoutKode_listInput], {
    nullable: true
  })
  connectOrCreate?: MtVocabCreateOrConnectWithoutKode_listInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabWhereUniqueInput], {
    nullable: true
  })
  connect?: MtVocabWhereUniqueInput[] | undefined;
}
