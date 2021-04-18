import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDaftarPengacaraArgs } from "./args/AggregateDaftarPengacaraArgs";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { AggregateDaftarPengacara } from "../../outputs/AggregateDaftarPengacara";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class AggregateDaftarPengacaraResolver {
  @TypeGraphQL.Query(_returns => AggregateDaftarPengacara, {
    nullable: false
  })
  async aggregateDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDaftarPengacaraArgs): Promise<AggregateDaftarPengacara> {
    return getPrismaFromContext(ctx).daftarPengacara.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
