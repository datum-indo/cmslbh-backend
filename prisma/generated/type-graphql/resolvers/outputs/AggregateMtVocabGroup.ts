import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabGroupAvgAggregate } from "../outputs/MtVocabGroupAvgAggregate";
import { MtVocabGroupCountAggregate } from "../outputs/MtVocabGroupCountAggregate";
import { MtVocabGroupMaxAggregate } from "../outputs/MtVocabGroupMaxAggregate";
import { MtVocabGroupMinAggregate } from "../outputs/MtVocabGroupMinAggregate";
import { MtVocabGroupSumAggregate } from "../outputs/MtVocabGroupSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateMtVocabGroup {
  @TypeGraphQL.Field(_type => MtVocabGroupCountAggregate, {
    nullable: true
  })
  count!: MtVocabGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => MtVocabGroupAvgAggregate, {
    nullable: true
  })
  avg!: MtVocabGroupAvgAggregate | null;

  @TypeGraphQL.Field(_type => MtVocabGroupSumAggregate, {
    nullable: true
  })
  sum!: MtVocabGroupSumAggregate | null;

  @TypeGraphQL.Field(_type => MtVocabGroupMinAggregate, {
    nullable: true
  })
  min!: MtVocabGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => MtVocabGroupMaxAggregate, {
    nullable: true
  })
  max!: MtVocabGroupMaxAggregate | null;
}
