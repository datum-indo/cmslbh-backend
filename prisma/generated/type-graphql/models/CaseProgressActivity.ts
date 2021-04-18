import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CaseProgressActivityLit } from "../models/CaseProgressActivityLit";
import { CaseProgressActivityNonlit } from "../models/CaseProgressActivityNonlit";
import { Renamedcase } from "../models/Renamedcase";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CaseProgressActivity {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  capaian?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hambatan?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  judulAktifitas?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  position?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rencanaStrategi?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  targetAdvokasi?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglAktifitas?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_id?: number | null;

  caseId?: Renamedcase | null;

  activitieslit?: CaseProgressActivityLit[];

  activitiesnonlit?: CaseProgressActivityNonlit[];
}
