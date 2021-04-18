import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSrcAnalisaArgs } from "./args/AggregateSrcAnalisaArgs";
import { SrcAnalisa } from "../../../models/SrcAnalisa";
import { AggregateSrcAnalisa } from "../../outputs/AggregateSrcAnalisa";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SrcAnalisa)
export class AggregateSrcAnalisaResolver {
  @TypeGraphQL.Query(_returns => AggregateSrcAnalisa, {
    nullable: false
  })
  async aggregateSrcAnalisa(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSrcAnalisaArgs): Promise<AggregateSrcAnalisa> {
    return getPrismaFromContext(ctx).srcAnalisa.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
