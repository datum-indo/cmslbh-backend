import * as TypeGraphQL from "type-graphql";
import { CreateSrcTemplateArgs } from "./args/CreateSrcTemplateArgs";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class CreateSrcTemplateResolver {
  @TypeGraphQL.Mutation(_returns => SrcTemplate, {
    nullable: false
  })
  async createSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSrcTemplateArgs): Promise<SrcTemplate> {
    return getPrismaFromContext(ctx).srcTemplate.create(args);
  }
}
