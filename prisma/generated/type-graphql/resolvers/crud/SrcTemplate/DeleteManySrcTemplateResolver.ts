import * as TypeGraphQL from "type-graphql";
import { DeleteManySrcTemplateArgs } from "./args/DeleteManySrcTemplateArgs";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class DeleteManySrcTemplateResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySrcTemplateArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).srcTemplate.deleteMany(args);
  }
}
