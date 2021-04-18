import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkAvgAggregate } from "../outputs/NetworkAvgAggregate";
import { NetworkCountAggregate } from "../outputs/NetworkCountAggregate";
import { NetworkMaxAggregate } from "../outputs/NetworkMaxAggregate";
import { NetworkMinAggregate } from "../outputs/NetworkMinAggregate";
import { NetworkSumAggregate } from "../outputs/NetworkSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateNetwork {
  @TypeGraphQL.Field(_type => NetworkCountAggregate, {
    nullable: true
  })
  count!: NetworkCountAggregate | null;

  @TypeGraphQL.Field(_type => NetworkAvgAggregate, {
    nullable: true
  })
  avg!: NetworkAvgAggregate | null;

  @TypeGraphQL.Field(_type => NetworkSumAggregate, {
    nullable: true
  })
  sum!: NetworkSumAggregate | null;

  @TypeGraphQL.Field(_type => NetworkMinAggregate, {
    nullable: true
  })
  min!: NetworkMinAggregate | null;

  @TypeGraphQL.Field(_type => NetworkMaxAggregate, {
    nullable: true
  })
  max!: NetworkMaxAggregate | null;
}
