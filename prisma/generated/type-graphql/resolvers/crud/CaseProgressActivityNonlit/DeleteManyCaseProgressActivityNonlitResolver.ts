import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseProgressActivityNonlitArgs } from "./args/DeleteManyCaseProgressActivityNonlitArgs";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class DeleteManyCaseProgressActivityNonlitResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseProgressActivityNonlitArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.deleteMany(args);
  }
}
