import * as TypeGraphQL from "type-graphql";
import { UpdateSrcTemplateArgs } from "./args/UpdateSrcTemplateArgs";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class UpdateSrcTemplateResolver {
  @TypeGraphQL.Mutation(_returns => SrcTemplate, {
    nullable: true
  })
  async updateSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSrcTemplateArgs): Promise<SrcTemplate | null> {
    return getPrismaFromContext(ctx).srcTemplate.update(args);
  }
}
