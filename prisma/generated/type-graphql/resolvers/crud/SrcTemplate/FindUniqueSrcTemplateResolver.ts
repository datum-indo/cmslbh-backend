import * as TypeGraphQL from "type-graphql";
import { FindUniqueSrcTemplateArgs } from "./args/FindUniqueSrcTemplateArgs";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class FindUniqueSrcTemplateResolver {
  @TypeGraphQL.Query(_returns => SrcTemplate, {
    nullable: true
  })
  async srcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueSrcTemplateArgs): Promise<SrcTemplate | null> {
    return getPrismaFromContext(ctx).srcTemplate.findUnique(args);
  }
}
