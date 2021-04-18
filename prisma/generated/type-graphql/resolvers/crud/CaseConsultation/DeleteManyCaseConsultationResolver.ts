import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseConsultationArgs } from "./args/DeleteManyCaseConsultationArgs";
import { CaseConsultation } from "../../../models/CaseConsultation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultation)
export class DeleteManyCaseConsultationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseConsultationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseConsultation.deleteMany(args);
  }
}
