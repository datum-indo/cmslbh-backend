import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseIncidentLocationArgs } from "./args/FindUniqueCaseIncidentLocationArgs";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class FindUniqueCaseIncidentLocationResolver {
  @TypeGraphQL.Query(_returns => CaseIncidentLocation, {
    nullable: true
  })
  async caseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseIncidentLocationArgs): Promise<CaseIncidentLocation | null> {
    return getPrismaFromContext(ctx).caseIncidentLocation.findUnique(args);
  }
}
