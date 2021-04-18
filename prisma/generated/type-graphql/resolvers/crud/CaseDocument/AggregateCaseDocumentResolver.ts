import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseDocumentArgs } from "./args/AggregateCaseDocumentArgs";
import { CaseDocument } from "../../../models/CaseDocument";
import { AggregateCaseDocument } from "../../outputs/AggregateCaseDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class AggregateCaseDocumentResolver {
  @TypeGraphQL.Query(_returns => AggregateCaseDocument, {
    nullable: false
  })
  async aggregateCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseDocumentArgs): Promise<AggregateCaseDocument> {
    return getPrismaFromContext(ctx).caseDocument.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
