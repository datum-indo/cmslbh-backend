import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseIncidentLocationArgs } from "./args/DeleteManyCaseIncidentLocationArgs";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class DeleteManyCaseIncidentLocationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseIncidentLocationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseIncidentLocation.deleteMany(args);
  }
}
