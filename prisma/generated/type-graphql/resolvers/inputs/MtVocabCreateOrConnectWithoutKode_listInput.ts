import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabCreateWithoutKode_listInput } from "../inputs/MtVocabCreateWithoutKode_listInput";
import { MtVocabWhereUniqueInput } from "../inputs/MtVocabWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabCreateOrConnectWithoutKode_listInput {
  @TypeGraphQL.Field(_type => MtVocabWhereUniqueInput, {
    nullable: false
  })
  where!: MtVocabWhereUniqueInput;

  @TypeGraphQL.Field(_type => MtVocabCreateWithoutKode_listInput, {
    nullable: false
  })
  create!: MtVocabCreateWithoutKode_listInput;
}
