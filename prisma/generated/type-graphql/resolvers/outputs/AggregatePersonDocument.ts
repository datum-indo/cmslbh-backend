import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonDocumentAvgAggregate } from "../outputs/PersonDocumentAvgAggregate";
import { PersonDocumentCountAggregate } from "../outputs/PersonDocumentCountAggregate";
import { PersonDocumentMaxAggregate } from "../outputs/PersonDocumentMaxAggregate";
import { PersonDocumentMinAggregate } from "../outputs/PersonDocumentMinAggregate";
import { PersonDocumentSumAggregate } from "../outputs/PersonDocumentSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregatePersonDocument {
  @TypeGraphQL.Field(_type => PersonDocumentCountAggregate, {
    nullable: true
  })
  count!: PersonDocumentCountAggregate | null;

  @TypeGraphQL.Field(_type => PersonDocumentAvgAggregate, {
    nullable: true
  })
  avg!: PersonDocumentAvgAggregate | null;

  @TypeGraphQL.Field(_type => PersonDocumentSumAggregate, {
    nullable: true
  })
  sum!: PersonDocumentSumAggregate | null;

  @TypeGraphQL.Field(_type => PersonDocumentMinAggregate, {
    nullable: true
  })
  min!: PersonDocumentMinAggregate | null;

  @TypeGraphQL.Field(_type => PersonDocumentMaxAggregate, {
    nullable: true
  })
  max!: PersonDocumentMaxAggregate | null;
}
