import * as TypeGraphQL from "type-graphql";
import { DeleteCaseIncidentLocationArgs } from "./args/DeleteCaseIncidentLocationArgs";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class DeleteCaseIncidentLocationResolver {
  @TypeGraphQL.Mutation(_returns => CaseIncidentLocation, {
    nullable: true
  })
  async deleteCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseIncidentLocationArgs): Promise<CaseIncidentLocation | null> {
    return getPrismaFromContext(ctx).caseIncidentLocation.delete(args);
  }
}
