import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SrcOperatorAvgAggregate } from "../outputs/SrcOperatorAvgAggregate";
import { SrcOperatorCountAggregate } from "../outputs/SrcOperatorCountAggregate";
import { SrcOperatorMaxAggregate } from "../outputs/SrcOperatorMaxAggregate";
import { SrcOperatorMinAggregate } from "../outputs/SrcOperatorMinAggregate";
import { SrcOperatorSumAggregate } from "../outputs/SrcOperatorSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateSrcOperator {
  @TypeGraphQL.Field(_type => SrcOperatorCountAggregate, {
    nullable: true
  })
  count!: SrcOperatorCountAggregate | null;

  @TypeGraphQL.Field(_type => SrcOperatorAvgAggregate, {
    nullable: true
  })
  avg!: SrcOperatorAvgAggregate | null;

  @TypeGraphQL.Field(_type => SrcOperatorSumAggregate, {
    nullable: true
  })
  sum!: SrcOperatorSumAggregate | null;

  @TypeGraphQL.Field(_type => SrcOperatorMinAggregate, {
    nullable: true
  })
  min!: SrcOperatorMinAggregate | null;

  @TypeGraphQL.Field(_type => SrcOperatorMaxAggregate, {
    nullable: true
  })
  max!: SrcOperatorMaxAggregate | null;
}
