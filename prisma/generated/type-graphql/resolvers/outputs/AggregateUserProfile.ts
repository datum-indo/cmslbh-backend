import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileAvgAggregate } from "../outputs/UserProfileAvgAggregate";
import { UserProfileCountAggregate } from "../outputs/UserProfileCountAggregate";
import { UserProfileMaxAggregate } from "../outputs/UserProfileMaxAggregate";
import { UserProfileMinAggregate } from "../outputs/UserProfileMinAggregate";
import { UserProfileSumAggregate } from "../outputs/UserProfileSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateUserProfile {
  @TypeGraphQL.Field(_type => UserProfileCountAggregate, {
    nullable: true
  })
  count!: UserProfileCountAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileAvgAggregate, {
    nullable: true
  })
  avg!: UserProfileAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileSumAggregate, {
    nullable: true
  })
  sum!: UserProfileSumAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileMinAggregate, {
    nullable: true
  })
  min!: UserProfileMinAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileMaxAggregate, {
    nullable: true
  })
  max!: UserProfileMaxAggregate | null;
}
