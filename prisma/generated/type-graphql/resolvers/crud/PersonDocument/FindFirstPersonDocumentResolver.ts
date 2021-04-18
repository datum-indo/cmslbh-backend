import * as TypeGraphQL from "type-graphql";
import { FindFirstPersonDocumentArgs } from "./args/FindFirstPersonDocumentArgs";
import { PersonDocument } from "../../../models/PersonDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class FindFirstPersonDocumentResolver {
  @TypeGraphQL.Query(_returns => PersonDocument, {
    nullable: true
  })
  async findFirstPersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPersonDocumentArgs): Promise<PersonDocument | null> {
    return getPrismaFromContext(ctx).personDocument.findFirst(args);
  }
}
