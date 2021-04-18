import * as TypeGraphQL from "type-graphql";
import { FindFirstSrcTemplateArgs } from "./args/FindFirstSrcTemplateArgs";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class FindFirstSrcTemplateResolver {
  @TypeGraphQL.Query(_returns => SrcTemplate, {
    nullable: true
  })
  async findFirstSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSrcTemplateArgs): Promise<SrcTemplate | null> {
    return getPrismaFromContext(ctx).srcTemplate.findFirst(args);
  }
}
