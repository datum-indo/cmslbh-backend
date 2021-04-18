import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseProgressActivityLitArgs } from "./args/DeleteManyCaseProgressActivityLitArgs";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class DeleteManyCaseProgressActivityLitResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseProgressActivityLitArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.deleteMany(args);
  }
}
