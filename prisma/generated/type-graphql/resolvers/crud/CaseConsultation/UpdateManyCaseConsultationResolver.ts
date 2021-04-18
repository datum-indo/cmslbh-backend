import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseConsultationArgs } from "./args/UpdateManyCaseConsultationArgs";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class UpdateManyCaseConsultationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseConsultationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseConsultation.updateMany(args);
  }
}
