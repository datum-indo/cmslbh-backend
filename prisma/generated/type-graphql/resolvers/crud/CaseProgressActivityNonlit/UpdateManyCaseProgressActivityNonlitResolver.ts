import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseProgressActivityNonlitArgs } from "./args/UpdateManyCaseProgressActivityNonlitArgs";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class UpdateManyCaseProgressActivityNonlitResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseProgressActivityNonlitArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.updateMany(args);
  }
}
