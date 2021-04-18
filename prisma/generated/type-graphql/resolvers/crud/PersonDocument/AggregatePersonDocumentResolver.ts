import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePersonDocumentArgs } from "./args/AggregatePersonDocumentArgs";
import { PersonDocument } from "../../../models/PersonDocument";
import { AggregatePersonDocument } from "../../outputs/AggregatePersonDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class AggregatePersonDocumentResolver {
  @TypeGraphQL.Query(_returns => AggregatePersonDocument, {
    nullable: false
  })
  async aggregatePersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePersonDocumentArgs): Promise<AggregatePersonDocument> {
    return getPrismaFromContext(ctx).personDocument.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
