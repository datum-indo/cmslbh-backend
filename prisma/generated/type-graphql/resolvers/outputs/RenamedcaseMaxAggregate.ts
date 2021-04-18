import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class RenamedcaseMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  applicationId!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  caseClosed!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  caseClosedJenis!: string | null;

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
  hakTerlanggar!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  issue!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  judulKasus!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  klasifikasiDok!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kronologiKasus!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  lockDitolak!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusPendampingan!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  targetAdvokasi!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  unlockPk!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  unlockTransfer!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pelakuKorbanRelasi!: string | null;

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
  case_progresses!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_transfer!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_pk!: number | null;
}
