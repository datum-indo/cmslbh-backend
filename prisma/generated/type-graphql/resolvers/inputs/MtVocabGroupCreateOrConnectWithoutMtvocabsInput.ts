import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabGroupCreateWithoutMtvocabsInput } from "../inputs/MtVocabGroupCreateWithoutMtvocabsInput";
import { MtVocabGroupWhereUniqueInput } from "../inputs/MtVocabGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabGroupCreateOrConnectWithoutMtvocabsInput {
  @TypeGraphQL.Field(_type => MtVocabGroupWhereUniqueInput, {
    nullable: false
  })
  where!: MtVocabGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => MtVocabGroupCreateWithoutMtvocabsInput, {
    nullable: false
  })
  create!: MtVocabGroupCreateWithoutMtvocabsInput;
}
