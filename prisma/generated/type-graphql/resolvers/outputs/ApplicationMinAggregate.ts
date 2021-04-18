import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ApplicationMinAggregate {
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
  dudukPerara!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  infoLbh!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  jumlahPenerimaManfaat!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  konfirmasiData!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  noReg!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pernahKlien!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pernahPpLain!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ppLain!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  regDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  relasiWakilClient!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  setujuAdvokasi!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusPerwakilan!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  waktuPernahKlien!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whyLbh!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tahap!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  wakil_Id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_applicationTocase!: number | null;
}
