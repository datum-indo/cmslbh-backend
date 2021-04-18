import * as TypeGraphQL from "type-graphql";
import { UpdateManyLogRequestAppArgs } from "./args/UpdateManyLogRequestAppArgs";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class UpdateManyLogRequestAppResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLogRequestAppArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).logRequestApp.updateMany(args);
  }
}
