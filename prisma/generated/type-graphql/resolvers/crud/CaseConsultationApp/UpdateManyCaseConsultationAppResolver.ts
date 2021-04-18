import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseConsultationAppArgs } from "./args/UpdateManyCaseConsultationAppArgs";
import { CaseConsultationApp } from "../../../models/CaseConsultationApp";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseConsultationApp)
export class UpdateManyCaseConsultationAppResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseConsultationApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseConsultationAppArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseConsultationApp.updateMany(args);
  }
}
