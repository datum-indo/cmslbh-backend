import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DaftarPengacaraAvgAggregate } from "../outputs/DaftarPengacaraAvgAggregate";
import { DaftarPengacaraCountAggregate } from "../outputs/DaftarPengacaraCountAggregate";
import { DaftarPengacaraMaxAggregate } from "../outputs/DaftarPengacaraMaxAggregate";
import { DaftarPengacaraMinAggregate } from "../outputs/DaftarPengacaraMinAggregate";
import { DaftarPengacaraSumAggregate } from "../outputs/DaftarPengacaraSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateDaftarPengacara {
  @TypeGraphQL.Field(_type => DaftarPengacaraCountAggregate, {
    nullable: true
  })
  count!: DaftarPengacaraCountAggregate | null;

  @TypeGraphQL.Field(_type => DaftarPengacaraAvgAggregate, {
    nullable: true
  })
  avg!: DaftarPengacaraAvgAggregate | null;

  @TypeGraphQL.Field(_type => DaftarPengacaraSumAggregate, {
    nullable: true
  })
  sum!: DaftarPengacaraSumAggregate | null;

  @TypeGraphQL.Field(_type => DaftarPengacaraMinAggregate, {
    nullable: true
  })
  min!: DaftarPengacaraMinAggregate | null;

  @TypeGraphQL.Field(_type => DaftarPengacaraMaxAggregate, {
    nullable: true
  })
  max!: DaftarPengacaraMaxAggregate | null;
}
