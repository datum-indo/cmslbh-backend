import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabWhereInput } from "../inputs/MtVocabWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabListRelationFilter {
  @TypeGraphQL.Field(_type => MtVocabWhereInput, {
    nullable: true
  })
  every?: MtVocabWhereInput | undefined;

  @TypeGraphQL.Field(_type => MtVocabWhereInput, {
    nullable: true
  })
  some?: MtVocabWhereInput | undefined;

  @TypeGraphQL.Field(_type => MtVocabWhereInput, {
    nullable: true
  })
  none?: MtVocabWhereInput | undefined;
}
