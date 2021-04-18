import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseConsultationAppArgs } from "./args/DeleteManyCaseConsultationAppArgs";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class DeleteManyCaseConsultationAppResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseConsultationAppArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseConsultationApp.deleteMany(args);
  }
}
