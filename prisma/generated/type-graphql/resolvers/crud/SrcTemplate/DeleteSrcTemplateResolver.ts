import * as TypeGraphQL from "type-graphql";
import { DeleteSrcTemplateArgs } from "./args/DeleteSrcTemplateArgs";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class DeleteSrcTemplateResolver {
  @TypeGraphQL.Mutation(_returns => SrcTemplate, {
    nullable: true
  })
  async deleteSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSrcTemplateArgs): Promise<SrcTemplate | null> {
    return getPrismaFromContext(ctx).srcTemplate.delete(args);
  }
}
