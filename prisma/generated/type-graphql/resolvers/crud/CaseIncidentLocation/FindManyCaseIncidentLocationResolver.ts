import * as TypeGraphQL from "type-graphql";
import { FindManyCaseIncidentLocationArgs } from "./args/FindManyCaseIncidentLocationArgs";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class FindManyCaseIncidentLocationResolver {
  @TypeGraphQL.Query(_returns => [CaseIncidentLocation], {
    nullable: false
  })
  async caseIncidentLocations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseIncidentLocationArgs): Promise<CaseIncidentLocation[]> {
    return getPrismaFromContext(ctx).caseIncidentLocation.findMany(args);
  }
}
