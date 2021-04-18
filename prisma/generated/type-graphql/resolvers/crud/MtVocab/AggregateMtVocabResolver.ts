import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMtVocabArgs } from "./args/AggregateMtVocabArgs";
import { MtVocab } from "../../../models/MtVocab";
import { AggregateMtVocab } from "../../outputs/AggregateMtVocab";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocab)
export class AggregateMtVocabResolver {
  @TypeGraphQL.Query(_returns => AggregateMtVocab, {
    nullable: false
  })
  async aggregateMtVocab(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMtVocabArgs): Promise<AggregateMtVocab> {
    return getPrismaFromContext(ctx).mtVocab.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
