import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseKorbanArgs } from "./args/DeleteManyCaseKorbanArgs";
import { CaseKorban } from "../../../models/CaseKorban";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class DeleteManyCaseKorbanResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseKorban(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseKorbanArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseKorban.deleteMany(args);
  }
}
