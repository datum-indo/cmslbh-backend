import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseIncidentLocationArgs } from "./args/UpdateManyCaseIncidentLocationArgs";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class UpdateManyCaseIncidentLocationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseIncidentLocationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseIncidentLocation.updateMany(args);
  }
}
