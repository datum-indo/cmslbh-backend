import * as TypeGraphQL from "type-graphql";
import { UpsertPersonDocumentArgs } from "./args/UpsertPersonDocumentArgs";
import { PersonDocument } from "../../../models/PersonDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class UpsertPersonDocumentResolver {
  @TypeGraphQL.Mutation(_returns => PersonDocument, {
    nullable: false
  })
  async upsertPersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertPersonDocumentArgs): Promise<PersonDocument> {
    return getPrismaFromContext(ctx).personDocument.upsert(args);
  }
}
