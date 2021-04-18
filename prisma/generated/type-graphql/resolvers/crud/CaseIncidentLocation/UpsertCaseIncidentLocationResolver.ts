import * as TypeGraphQL from "type-graphql";
import { UpsertCaseIncidentLocationArgs } from "./args/UpsertCaseIncidentLocationArgs";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class UpsertCaseIncidentLocationResolver {
  @TypeGraphQL.Mutation(_returns => CaseIncidentLocation, {
    nullable: false
  })
  async upsertCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseIncidentLocationArgs): Promise<CaseIncidentLocation> {
    return getPrismaFromContext(ctx).caseIncidentLocation.upsert(args);
  }
}
