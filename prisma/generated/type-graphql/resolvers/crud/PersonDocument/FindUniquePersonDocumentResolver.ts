import * as TypeGraphQL from "type-graphql";
import { FindUniquePersonDocumentArgs } from "./args/FindUniquePersonDocumentArgs";
import { PersonDocument } from "../../../models/PersonDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class FindUniquePersonDocumentResolver {
  @TypeGraphQL.Query(_returns => PersonDocument, {
    nullable: true
  })
  async personDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePersonDocumentArgs): Promise<PersonDocument | null> {
    return getPrismaFromContext(ctx).personDocument.findUnique(args);
  }
}
