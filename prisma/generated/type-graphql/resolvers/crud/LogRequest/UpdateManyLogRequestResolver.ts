import * as TypeGraphQL from "type-graphql";
import { UpdateManyLogRequestArgs } from "./args/UpdateManyLogRequestArgs";
import { LogRequest } from "../../../models/LogRequest";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class UpdateManyLogRequestResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLogRequestArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).logRequest.updateMany(args);
  }
}
