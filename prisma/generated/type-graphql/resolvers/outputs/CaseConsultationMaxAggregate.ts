import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CaseConsultationMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  appKonsul!: string | null;

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
  isiKonsul!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  harapan!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  saranHukum!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rencanaTindakLanjut!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  judulAktifitas!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ppKonsul!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglKonsul!: Date | null;

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
  case_id!: number | null;
}
