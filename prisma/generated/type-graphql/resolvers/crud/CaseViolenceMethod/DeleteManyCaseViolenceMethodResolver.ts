import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseViolenceMethodArgs } from "./args/DeleteManyCaseViolenceMethodArgs";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class DeleteManyCaseViolenceMethodResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseViolenceMethodArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseViolenceMethod.deleteMany(args);
  }
}
