import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMtVocabGroupArgs } from "./args/AggregateMtVocabGroupArgs";
import { MtVocabGroup } from "../../../models/MtVocabGroup";
import { AggregateMtVocabGroup } from "../../outputs/AggregateMtVocabGroup";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MtVocabGroup)
export class AggregateMtVocabGroupResolver {
  @TypeGraphQL.Query(_returns => AggregateMtVocabGroup, {
    nullable: false
  })
  async aggregateMtVocabGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMtVocabGroupArgs): Promise<AggregateMtVocabGroup> {
    return getPrismaFromContext(ctx).mtVocabGroup.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
