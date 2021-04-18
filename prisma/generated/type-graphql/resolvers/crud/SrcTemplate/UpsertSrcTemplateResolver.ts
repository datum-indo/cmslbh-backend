import * as TypeGraphQL from "type-graphql";
import { UpsertSrcTemplateArgs } from "./args/UpsertSrcTemplateArgs";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class UpsertSrcTemplateResolver {
  @TypeGraphQL.Mutation(_returns => SrcTemplate, {
    nullable: false
  })
  async upsertSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSrcTemplateArgs): Promise<SrcTemplate> {
    return getPrismaFromContext(ctx).srcTemplate.upsert(args);
  }
}
