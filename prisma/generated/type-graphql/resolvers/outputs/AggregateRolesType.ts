import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesTypeAvgAggregate } from "../outputs/RolesTypeAvgAggregate";
import { RolesTypeCountAggregate } from "../outputs/RolesTypeCountAggregate";
import { RolesTypeMaxAggregate } from "../outputs/RolesTypeMaxAggregate";
import { RolesTypeMinAggregate } from "../outputs/RolesTypeMinAggregate";
import { RolesTypeSumAggregate } from "../outputs/RolesTypeSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateRolesType {
  @TypeGraphQL.Field(_type => RolesTypeCountAggregate, {
    nullable: true
  })
  count!: RolesTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => RolesTypeAvgAggregate, {
    nullable: true
  })
  avg!: RolesTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => RolesTypeSumAggregate, {
    nullable: true
  })
  sum!: RolesTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => RolesTypeMinAggregate, {
    nullable: true
  })
  min!: RolesTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => RolesTypeMaxAggregate, {
    nullable: true
  })
  max!: RolesTypeMaxAggregate | null;
}
