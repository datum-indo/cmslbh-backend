import * as TypeGraphQL from "type-graphql";
import { UpdateCaseClassificationArgs } from "./args/UpdateCaseClassificationArgs";
import { CaseClassification } from "../../../models/CaseClassification";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class UpdateCaseClassificationResolver {
  @TypeGraphQL.Mutation(_returns => CaseClassification, {
    nullable: true
  })
  async updateCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseClassificationArgs): Promise<CaseClassification | null> {
    return getPrismaFromContext(ctx).caseClassification.update(args);
  }
}
