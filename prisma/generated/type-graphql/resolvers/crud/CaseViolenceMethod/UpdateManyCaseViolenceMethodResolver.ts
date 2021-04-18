import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseViolenceMethodArgs } from "./args/UpdateManyCaseViolenceMethodArgs";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class UpdateManyCaseViolenceMethodResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseViolenceMethodArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseViolenceMethod.updateMany(args);
  }
}
