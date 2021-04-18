import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictCountAggregate } from "../outputs/DataDictCountAggregate";
import { DataDictMaxAggregate } from "../outputs/DataDictMaxAggregate";
import { DataDictMinAggregate } from "../outputs/DataDictMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateDataDict {
  @TypeGraphQL.Field(_type => DataDictCountAggregate, {
    nullable: true
  })
  count!: DataDictCountAggregate | null;

  @TypeGraphQL.Field(_type => DataDictMinAggregate, {
    nullable: true
  })
  min!: DataDictMinAggregate | null;

  @TypeGraphQL.Field(_type => DataDictMaxAggregate, {
    nullable: true
  })
  max!: DataDictMaxAggregate | null;
}
