import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabGroupCreateOrConnectWithoutMtvocabsInput } from "../inputs/MtVocabGroupCreateOrConnectWithoutMtvocabsInput";
import { MtVocabGroupCreateWithoutMtvocabsInput } from "../inputs/MtVocabGroupCreateWithoutMtvocabsInput";
import { MtVocabGroupUpdateWithoutMtvocabsInput } from "../inputs/MtVocabGroupUpdateWithoutMtvocabsInput";
import { MtVocabGroupUpsertWithoutMtvocabsInput } from "../inputs/MtVocabGroupUpsertWithoutMtvocabsInput";
import { MtVocabGroupWhereUniqueInput } from "../inputs/MtVocabGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabGroupUpdateOneWithoutMtvocabsInput {
  @TypeGraphQL.Field(_type => MtVocabGroupCreateWithoutMtvocabsInput, {
    nullable: true
  })
  create?: MtVocabGroupCreateWithoutMtvocabsInput | undefined;

  @TypeGraphQL.Field(_type => MtVocabGroupCreateOrConnectWithoutMtvocabsInput, {
    nullable: true
  })
  connectOrCreate?: MtVocabGroupCreateOrConnectWithoutMtvocabsInput | undefined;

  @TypeGraphQL.Field(_type => MtVocabGroupUpsertWithoutMtvocabsInput, {
    nullable: true
  })
  upsert?: MtVocabGroupUpsertWithoutMtvocabsInput | undefined;

  @TypeGraphQL.Field(_type => MtVocabGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: MtVocabGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MtVocabGroupUpdateWithoutMtvocabsInput, {
    nullable: true
  })
  update?: MtVocabGroupUpdateWithoutMtvocabsInput | undefined;
}
