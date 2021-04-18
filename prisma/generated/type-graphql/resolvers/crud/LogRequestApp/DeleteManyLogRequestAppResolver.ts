import * as TypeGraphQL from "type-graphql";
import { DeleteManyLogRequestAppArgs } from "./args/DeleteManyLogRequestAppArgs";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class DeleteManyLogRequestAppResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLogRequestAppArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).logRequestApp.deleteMany(args);
  }
}
