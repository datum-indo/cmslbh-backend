import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { CaseCategory } from "../../../models/CaseCategory";
import { CaseClassification } from "../../../models/CaseClassification";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { CaseDocument } from "../../../models/CaseDocument";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { CaseIssue } from "../../../models/CaseIssue";
import { CaseKorban } from "../../../models/CaseKorban";
import { CaseModus } from "../../../models/CaseModus";
import { CasePelaku } from "../../../models/CasePelaku";
import { CasePk } from "../../../models/CasePk";
import { CaseProgress } from "../../../models/CaseProgress";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { CaseReferral } from "../../../models/CaseReferral";
import { CaseTransfer } from "../../../models/CaseTransfer";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { LogRequest } from "../../../models/LogRequest";
import { Renamedcase } from "../../../models/Renamedcase";
import { RenamedcaseActivitiesArgs } from "./args/RenamedcaseActivitiesArgs";
import { RenamedcaseCategoriesArgs } from "./args/RenamedcaseCategoriesArgs";
import { RenamedcaseClassificationsArgs } from "./args/RenamedcaseClassificationsArgs";
import { RenamedcaseConsultationsArgs } from "./args/RenamedcaseConsultationsArgs";
import { RenamedcaseDocumentsArgs } from "./args/RenamedcaseDocumentsArgs";
import { RenamedcaseIncidentLocationsArgs } from "./args/RenamedcaseIncidentLocationsArgs";
import { RenamedcaseIssuesArgs } from "./args/RenamedcaseIssuesArgs";
import { RenamedcaseKorbansArgs } from "./args/RenamedcaseKorbansArgs";
import { RenamedcaseLogRequestsArgs } from "./args/RenamedcaseLogRequestsArgs";
import { RenamedcaseModusesArgs } from "./args/RenamedcaseModusesArgs";
import { RenamedcasePelakusArgs } from "./args/RenamedcasePelakusArgs";
import { RenamedcaseReferralsArgs } from "./args/RenamedcaseReferralsArgs";
import { RenamedcaseTransferreferralsArgs } from "./args/RenamedcaseTransferreferralsArgs";
import { RenamedcaseViolatedrightsArgs } from "./args/RenamedcaseViolatedrightsArgs";
import { RenamedcaseViolenceMethodsArgs } from "./args/RenamedcaseViolenceMethodsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class RenamedcaseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CasePk, {
    nullable: true
  })
  async pk(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any): Promise<CasePk | null> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).pk({});
  }

  @TypeGraphQL.FieldResolver(_type => CaseProgress, {
    nullable: true
  })
  async progresses(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any): Promise<CaseProgress | null> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).progresses({});
  }

  @TypeGraphQL.FieldResolver(_type => CaseTransfer, {
    nullable: true
  })
  async transfer(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any): Promise<CaseTransfer | null> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).transfer({});
  }

  @TypeGraphQL.FieldResolver(_type => Application, {
    nullable: true
  })
  async application(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any): Promise<Application | null> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).application({});
  }

  @TypeGraphQL.FieldResolver(_type => [CaseReferral], {
    nullable: false
  })
  async referrals(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseReferralsArgs): Promise<CaseReferral[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).referrals(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseClassification], {
    nullable: false
  })
  async classifications(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseClassificationsArgs): Promise<CaseClassification[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).classifications(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseConsultation], {
    nullable: false
  })
  async consultations(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseConsultationsArgs): Promise<CaseConsultation[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).consultations(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseDocument], {
    nullable: false
  })
  async documents(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseDocumentsArgs): Promise<CaseDocument[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).documents(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseIssue], {
    nullable: false
  })
  async issues(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseIssuesArgs): Promise<CaseIssue[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).issues(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseKorban], {
    nullable: false
  })
  async korbans(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseKorbansArgs): Promise<CaseKorban[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).korbans(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CasePelaku], {
    nullable: false
  })
  async pelakus(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcasePelakusArgs): Promise<CasePelaku[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).pelakus(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseProgressActivity], {
    nullable: false
  })
  async activities(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseActivitiesArgs): Promise<CaseProgressActivity[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).activities(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseTransferReferral], {
    nullable: false
  })
  async transferreferrals(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseTransferreferralsArgs): Promise<CaseTransferReferral[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).transferreferrals(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseViolatedRight], {
    nullable: false
  })
  async violatedrights(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseViolatedrightsArgs): Promise<CaseViolatedRight[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).violatedrights(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LogRequest], {
    nullable: false
  })
  async logRequests(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseLogRequestsArgs): Promise<LogRequest[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).logRequests(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseCategory], {
    nullable: false
  })
  async categories(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseCategoriesArgs): Promise<CaseCategory[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).categories(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseIncidentLocation], {
    nullable: false
  })
  async incidentLocations(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseIncidentLocationsArgs): Promise<CaseIncidentLocation[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).incidentLocations(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseModus], {
    nullable: false
  })
  async moduses(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseModusesArgs): Promise<CaseModus[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).moduses(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CaseViolenceMethod], {
    nullable: false
  })
  async violenceMethods(@TypeGraphQL.Root() renamedcase: Renamedcase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RenamedcaseViolenceMethodsArgs): Promise<CaseViolenceMethod[]> {
    return getPrismaFromContext(ctx).renamedcase.findUnique({
      where: {
        id: renamedcase.id,
      },
    }).violenceMethods(args);
  }
}
