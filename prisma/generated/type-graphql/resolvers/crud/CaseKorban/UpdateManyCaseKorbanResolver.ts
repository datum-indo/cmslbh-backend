import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseKorbanArgs } from "./args/UpdateManyCaseKorbanArgs";
import { CaseKorban } from "../../../models/CaseKorban";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class UpdateManyCaseKorbanResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseKorbanArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseKorban.updateMany(args);
  }
}
