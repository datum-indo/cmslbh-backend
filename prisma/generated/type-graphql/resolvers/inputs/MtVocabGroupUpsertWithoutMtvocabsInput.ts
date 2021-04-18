import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabGroupCreateWithoutMtvocabsInput } from "../inputs/MtVocabGroupCreateWithoutMtvocabsInput";
import { MtVocabGroupUpdateWithoutMtvocabsInput } from "../inputs/MtVocabGroupUpdateWithoutMtvocabsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabGroupUpsertWithoutMtvocabsInput {
  @TypeGraphQL.Field(_type => MtVocabGroupUpdateWithoutMtvocabsInput, {
    nullable: false
  })
  update!: MtVocabGroupUpdateWithoutMtvocabsInput;

  @TypeGraphQL.Field(_type => MtVocabGroupCreateWithoutMtvocabsInput, {
    nullable: false
  })
  create!: MtVocabGroupCreateWithoutMtvocabsInput;
}
