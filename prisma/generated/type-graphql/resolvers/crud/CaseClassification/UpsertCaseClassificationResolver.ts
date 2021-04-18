import * as TypeGraphQL from "type-graphql";
import { UpsertCaseClassificationArgs } from "./args/UpsertCaseClassificationArgs";
import { CaseClassification } from "../../../models/CaseClassification";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class UpsertCaseClassificationResolver {
  @TypeGraphQL.Mutation(_returns => CaseClassification, {
    nullable: false
  })
  async upsertCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseClassificationArgs): Promise<CaseClassification> {
    return getPrismaFromContext(ctx).caseClassification.upsert(args);
  }
}
