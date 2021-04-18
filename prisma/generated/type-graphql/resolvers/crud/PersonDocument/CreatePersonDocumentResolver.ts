import * as TypeGraphQL from "type-graphql";
import { CreatePersonDocumentArgs } from "./args/CreatePersonDocumentArgs";
import { PersonDocument } from "../../../models/PersonDocument";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class CreatePersonDocumentResolver {
  @TypeGraphQL.Mutation(_returns => PersonDocument, {
    nullable: false
  })
  async createPersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePersonDocumentArgs): Promise<PersonDocument> {
    return getPrismaFromContext(ctx).personDocument.create(args);
  }
}
