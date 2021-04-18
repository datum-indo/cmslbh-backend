import * as TypeGraphQL from "type-graphql";
import { UpdateCaseIncidentLocationArgs } from "./args/UpdateCaseIncidentLocationArgs";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class UpdateCaseIncidentLocationResolver {
  @TypeGraphQL.Mutation(_returns => CaseIncidentLocation, {
    nullable: true
  })
  async updateCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseIncidentLocationArgs): Promise<CaseIncidentLocation | null> {
    return getPrismaFromContext(ctx).caseIncidentLocation.update(args);
  }
}
