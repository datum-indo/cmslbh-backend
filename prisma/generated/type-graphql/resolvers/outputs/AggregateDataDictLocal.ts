import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictLocalAvgAggregate } from "../outputs/DataDictLocalAvgAggregate";
import { DataDictLocalCountAggregate } from "../outputs/DataDictLocalCountAggregate";
import { DataDictLocalMaxAggregate } from "../outputs/DataDictLocalMaxAggregate";
import { DataDictLocalMinAggregate } from "../outputs/DataDictLocalMinAggregate";
import { DataDictLocalSumAggregate } from "../outputs/DataDictLocalSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateDataDictLocal {
  @TypeGraphQL.Field(_type => DataDictLocalCountAggregate, {
    nullable: true
  })
  count!: DataDictLocalCountAggregate | null;

  @TypeGraphQL.Field(_type => DataDictLocalAvgAggregate, {
    nullable: true
  })
  avg!: DataDictLocalAvgAggregate | null;

  @TypeGraphQL.Field(_type => DataDictLocalSumAggregate, {
    nullable: true
  })
  sum!: DataDictLocalSumAggregate | null;

  @TypeGraphQL.Field(_type => DataDictLocalMinAggregate, {
    nullable: true
  })
  min!: DataDictLocalMinAggregate | null;

  @TypeGraphQL.Field(_type => DataDictLocalMaxAggregate, {
    nullable: true
  })
  max!: DataDictLocalMaxAggregate | null;
}
