import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseIncidentLocationArgs } from "./args/FindFirstCaseIncidentLocationArgs";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class FindFirstCaseIncidentLocationResolver {
  @TypeGraphQL.Query(_returns => CaseIncidentLocation, {
    nullable: true
  })
  async findFirstCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseIncidentLocationArgs): Promise<CaseIncidentLocation | null> {
    return getPrismaFromContext(ctx).caseIncidentLocation.findFirst(args);
  }
}
