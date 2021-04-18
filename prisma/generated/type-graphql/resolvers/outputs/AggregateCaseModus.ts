import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseModusAvgAggregate } from "../outputs/CaseModusAvgAggregate";
import { CaseModusCountAggregate } from "../outputs/CaseModusCountAggregate";
import { CaseModusMaxAggregate } from "../outputs/CaseModusMaxAggregate";
import { CaseModusMinAggregate } from "../outputs/CaseModusMinAggregate";
import { CaseModusSumAggregate } from "../outputs/CaseModusSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCaseModus {
  @TypeGraphQL.Field(_type => CaseModusCountAggregate, {
    nullable: true
  })
  count!: CaseModusCountAggregate | null;

  @TypeGraphQL.Field(_type => CaseModusAvgAggregate, {
    nullable: true
  })
  avg!: CaseModusAvgAggregate | null;

  @TypeGraphQL.Field(_type => CaseModusSumAggregate, {
    nullable: true
  })
  sum!: CaseModusSumAggregate | null;

  @TypeGraphQL.Field(_type => CaseModusMinAggregate, {
    nullable: true
  })
  min!: CaseModusMinAggregate | null;

  @TypeGraphQL.Field(_type => CaseModusMaxAggregate, {
    nullable: true
  })
  max!: CaseModusMaxAggregate | null;
}
