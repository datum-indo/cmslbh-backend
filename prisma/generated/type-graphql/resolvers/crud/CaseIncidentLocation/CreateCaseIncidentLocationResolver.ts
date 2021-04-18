import * as TypeGraphQL from "type-graphql";
import { CreateCaseIncidentLocationArgs } from "./args/CreateCaseIncidentLocationArgs";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class CreateCaseIncidentLocationResolver {
  @TypeGraphQL.Mutation(_returns => CaseIncidentLocation, {
    nullable: false
  })
  async createCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseIncidentLocationArgs): Promise<CaseIncidentLocation> {
    return getPrismaFromContext(ctx).caseIncidentLocation.create(args);
  }
}
