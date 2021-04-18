import * as TypeGraphQL from "type-graphql";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class CaseIncidentLocationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() caseIncidentLocation: CaseIncidentLocation, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseIncidentLocation.findUnique({
      where: {
        id: caseIncidentLocation.id,
      },
    }).caseId({});
  }
}
