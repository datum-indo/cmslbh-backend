import * as TypeGraphQL from "type-graphql";
import { UpdatePersonDocumentArgs } from "./args/UpdatePersonDocumentArgs";
import { PersonDocument } from "../../../models/PersonDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class UpdatePersonDocumentResolver {
  @TypeGraphQL.Mutation(_returns => PersonDocument, {
    nullable: true
  })
  async updatePersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePersonDocumentArgs): Promise<PersonDocument | null> {
    return getPrismaFromContext(ctx).personDocument.update(args);
  }
}
