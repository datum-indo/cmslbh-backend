import * as TypeGraphQL from "type-graphql";
import { CreateCaseClassificationArgs } from "./args/CreateCaseClassificationArgs";
import { CaseClassification } from "../../../models/CaseClassification";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class CreateCaseClassificationResolver {
  @TypeGraphQL.Mutation(_returns => CaseClassification, {
    nullable: false
  })
  async createCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseClassificationArgs): Promise<CaseClassification> {
    return getPrismaFromContext(ctx).caseClassification.create(args);
  }
}
