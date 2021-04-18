import * as TypeGraphQL from "type-graphql";
import { UpdateManySrcTemplateArgs } from "./args/UpdateManySrcTemplateArgs";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class UpdateManySrcTemplateResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySrcTemplateArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcTemplate.updateMany(args);
  }
}
