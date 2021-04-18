import * as TypeGraphQL from "type-graphql";
import { FindManySrcTemplateArgs } from "./args/FindManySrcTemplateArgs";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class FindManySrcTemplateResolver {
  @TypeGraphQL.Query(_returns => [SrcTemplate], {
    nullable: false
  })
  async srcTemplates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySrcTemplateArgs): Promise<SrcTemplate[]> {
    return getPrismaFromContext(ctx).srcTemplate.findMany(args);
  }
}
