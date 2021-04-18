import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabAvgAggregate } from "../outputs/MtVocabAvgAggregate";
import { MtVocabCountAggregate } from "../outputs/MtVocabCountAggregate";
import { MtVocabMaxAggregate } from "../outputs/MtVocabMaxAggregate";
import { MtVocabMinAggregate } from "../outputs/MtVocabMinAggregate";
import { MtVocabSumAggregate } from "../outputs/MtVocabSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateMtVocab {
  @TypeGraphQL.Field(_type => MtVocabCountAggregate, {
    nullable: true
  })
  count!: MtVocabCountAggregate | null;

  @TypeGraphQL.Field(_type => MtVocabAvgAggregate, {
    nullable: true
  })
  avg!: MtVocabAvgAggregate | null;

  @TypeGraphQL.Field(_type => MtVocabSumAggregate, {
    nullable: true
  })
  sum!: MtVocabSumAggregate | null;

  @TypeGraphQL.Field(_type => MtVocabMinAggregate, {
    nullable: true
  })
  min!: MtVocabMinAggregate | null;

  @TypeGraphQL.Field(_type => MtVocabMaxAggregate, {
    nullable: true
  })
  max!: MtVocabMaxAggregate | null;
}
