import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CasePkMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  didampingi!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legalMemo!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notulaRapat!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  targetAkhirAdvokasi!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  strategiAdvokasi!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusAlasanTdk!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglRapat!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pp_pendamping!: number | null;
}
