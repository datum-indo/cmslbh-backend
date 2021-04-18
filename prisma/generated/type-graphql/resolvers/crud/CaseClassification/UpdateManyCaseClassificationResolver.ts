import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseClassificationArgs } from "./args/UpdateManyCaseClassificationArgs";
import { CaseClassification } from "../../../models/CaseClassification";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class UpdateManyCaseClassificationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseClassificationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseClassification.updateMany(args);
  }
}
