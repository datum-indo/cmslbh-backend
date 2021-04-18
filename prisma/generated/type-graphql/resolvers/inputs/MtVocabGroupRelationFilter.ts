import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabGroupWhereInput } from "../inputs/MtVocabGroupWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabGroupRelationFilter {
  @TypeGraphQL.Field(_type => MtVocabGroupWhereInput, {
    nullable: true
  })
  is?: MtVocabGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => MtVocabGroupWhereInput, {
    nullable: true
  })
  isNot?: MtVocabGroupWhereInput | undefined;
}
