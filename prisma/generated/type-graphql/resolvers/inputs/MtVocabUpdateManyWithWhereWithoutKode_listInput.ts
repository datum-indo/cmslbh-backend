import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabScalarWhereInput } from "../inputs/MtVocabScalarWhereInput";
import { MtVocabUpdateManyMutationInput } from "../inputs/MtVocabUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabUpdateManyWithWhereWithoutKode_listInput {
  @TypeGraphQL.Field(_type => MtVocabScalarWhereInput, {
    nullable: false
  })
  where!: MtVocabScalarWhereInput;

  @TypeGraphQL.Field(_type => MtVocabUpdateManyMutationInput, {
    nullable: false
  })
  data!: MtVocabUpdateManyMutationInput;
}
