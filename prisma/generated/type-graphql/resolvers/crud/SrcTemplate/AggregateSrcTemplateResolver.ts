import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSrcTemplateArgs } from "./args/AggregateSrcTemplateArgs";
import { SrcTemplate } from "../../../models/SrcTemplate";
import { AggregateSrcTemplate } from "../../outputs/AggregateSrcTemplate";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcTemplate)
export class AggregateSrcTemplateResolver {
  @TypeGraphQL.Query(_returns => AggregateSrcTemplate, {
    nullable: false
  })
  async aggregateSrcTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSrcTemplateArgs): Promise<AggregateSrcTemplate> {
    return getPrismaFromContext(ctx).srcTemplate.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
