import * as TypeGraphQL from "type-graphql";
import { Person } from "../../../models/Person";
import { PersonDocument } from "../../../models/PersonDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class PersonDocumentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: true
  })
  async Person(@TypeGraphQL.Root() personDocument: PersonDocument, @TypeGraphQL.Ctx() ctx: any): Promise<Person | null> {
    return getPrismaFromContext(ctx).personDocument.findUnique({
      where: {
        id: personDocument.id,
      },
    }).Person({});
  }
}
