import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseClassificationArgs } from "./args/DeleteManyCaseClassificationArgs";
import { CaseClassification } from "../../../models/CaseClassification";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class DeleteManyCaseClassificationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseClassificationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseClassification.deleteMany(args);
  }
}
