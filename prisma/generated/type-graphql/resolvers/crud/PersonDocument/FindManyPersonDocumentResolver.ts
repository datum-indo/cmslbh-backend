import * as TypeGraphQL from "type-graphql";
import { FindManyPersonDocumentArgs } from "./args/FindManyPersonDocumentArgs";
import { PersonDocument } from "../../../models/PersonDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class FindManyPersonDocumentResolver {
  @TypeGraphQL.Query(_returns => [PersonDocument], {
    nullable: false
  })
  async personDocuments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPersonDocumentArgs): Promise<PersonDocument[]> {
    return getPrismaFromContext(ctx).personDocument.findMany(args);
  }
}
