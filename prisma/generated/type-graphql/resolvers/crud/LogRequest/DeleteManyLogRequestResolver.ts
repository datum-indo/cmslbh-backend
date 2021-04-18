import * as TypeGraphQL from "type-graphql";
import { DeleteManyLogRequestArgs } from "./args/DeleteManyLogRequestArgs";
import { LogRequest } from "../../../models/LogRequest";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class DeleteManyLogRequestResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLogRequestArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).logRequest.deleteMany(args);
  }
}
