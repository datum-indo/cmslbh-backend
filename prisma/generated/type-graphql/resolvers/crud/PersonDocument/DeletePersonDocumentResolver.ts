import * as TypeGraphQL from "type-graphql";
import { DeletePersonDocumentArgs } from "./args/DeletePersonDocumentArgs";
import { PersonDocument } from "../../../models/PersonDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class DeletePersonDocumentResolver {
  @TypeGraphQL.Mutation(_returns => PersonDocument, {
    nullable: true
  })
  async deletePersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeletePersonDocumentArgs): Promise<PersonDocument | null> {
    return getPrismaFromContext(ctx).personDocument.delete(args);
  }
}
