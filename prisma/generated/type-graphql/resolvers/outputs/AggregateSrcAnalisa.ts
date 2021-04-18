import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SrcAnalisaAvgAggregate } from "../outputs/SrcAnalisaAvgAggregate";
import { SrcAnalisaCountAggregate } from "../outputs/SrcAnalisaCountAggregate";
import { SrcAnalisaMaxAggregate } from "../outputs/SrcAnalisaMaxAggregate";
import { SrcAnalisaMinAggregate } from "../outputs/SrcAnalisaMinAggregate";
import { SrcAnalisaSumAggregate } from "../outputs/SrcAnalisaSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateSrcAnalisa {
  @TypeGraphQL.Field(_type => SrcAnalisaCountAggregate, {
    nullable: true
  })
  count!: SrcAnalisaCountAggregate | null;

  @TypeGraphQL.Field(_type => SrcAnalisaAvgAggregate, {
    nullable: true
  })
  avg!: SrcAnalisaAvgAggregate | null;

  @TypeGraphQL.Field(_type => SrcAnalisaSumAggregate, {
    nullable: true
  })
  sum!: SrcAnalisaSumAggregate | null;

  @TypeGraphQL.Field(_type => SrcAnalisaMinAggregate, {
    nullable: true
  })
  min!: SrcAnalisaMinAggregate | null;

  @TypeGraphQL.Field(_type => SrcAnalisaMaxAggregate, {
    nullable: true
  })
  max!: SrcAnalisaMaxAggregate | null;
}
