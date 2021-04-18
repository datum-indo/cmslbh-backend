import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Application } from "../models/Application";
import { CaseCategory } from "../models/CaseCategory";
import { CaseClassification } from "../models/CaseClassification";
import { CaseConsultation } from "../models/CaseConsultation";
import { CaseDocument } from "../models/CaseDocument";
import { CaseIncidentLocation } from "../models/CaseIncidentLocation";
import { CaseIssue } from "../models/CaseIssue";
import { CaseKorban } from "../models/CaseKorban";
import { CaseModus } from "../models/CaseModus";
import { CasePelaku } from "../models/CasePelaku";
import { CasePk } from "../models/CasePk";
import { CaseProgress } from "../models/CaseProgress";
import { CaseProgressActivity } from "../models/CaseProgressActivity";
import { CaseReferral } from "../models/CaseReferral";
import { CaseTransfer } from "../models/CaseTransfer";
import { CaseTransferReferral } from "../models/CaseTransferReferral";
import { CaseViolatedRight } from "../models/CaseViolatedRight";
import { CaseViolenceMethod } from "../models/CaseViolenceMethod";
import { LogRequest } from "../models/LogRequest";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Renamedcase {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  applicationId?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  caseClosed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  caseClosedJenis?: string | null;

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
  hakTerlanggar?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  issue?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  judulKasus?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  klasifikasiDok?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kronologiKasus?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  lockDitolak!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusPendampingan?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  targetAdvokasi?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  unlockPk!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  unlockTransfer!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pelakuKorbanRelasi?: string | null;

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
  case_progresses?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_transfer?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_pk?: number | null;

  pk?: CasePk | null;

  progresses?: CaseProgress | null;

  transfer?: CaseTransfer | null;

  application?: Application | null;

  referrals?: CaseReferral[];

  classifications?: CaseClassification[];

  consultations?: CaseConsultation[];

  documents?: CaseDocument[];

  issues?: CaseIssue[];

  korbans?: CaseKorban[];

  pelakus?: CasePelaku[];

  activities?: CaseProgressActivity[];

  transferreferrals?: CaseTransferReferral[];

  violatedrights?: CaseViolatedRight[];

  logRequests?: LogRequest[];

  categories?: CaseCategory[];

  incidentLocations?: CaseIncidentLocation[];

  moduses?: CaseModus[];

  violenceMethods?: CaseViolenceMethod[];
}
