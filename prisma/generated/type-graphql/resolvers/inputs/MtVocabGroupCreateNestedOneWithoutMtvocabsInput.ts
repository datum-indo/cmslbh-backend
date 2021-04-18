import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabGroupCreateOrConnectWithoutMtvocabsInput } from "../inputs/MtVocabGroupCreateOrConnectWithoutMtvocabsInput";
import { MtVocabGroupCreateWithoutMtvocabsInput } from "../inputs/MtVocabGroupCreateWithoutMtvocabsInput";
import { MtVocabGroupWhereUniqueInput } from "../inputs/MtVocabGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabGroupCreateNestedOneWithoutMtvocabsInput {
  @TypeGraphQL.Field(_type => MtVocabGroupCreateWithoutMtvocabsInput, {
    nullable: true
  })
  create?: MtVocabGroupCreateWithoutMtvocabsInput | undefined;

  @TypeGraphQL.Field(_type => MtVocabGroupCreateOrConnectWithoutMtvocabsInput, {
    nullable: true
  })
  connectOrCreate?: MtVocabGroupCreateOrConnectWithoutMtvocabsInput | undefined;

  @TypeGraphQL.Field(_type => MtVocabGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: MtVocabGroupWhereUniqueInput | undefined;
}
