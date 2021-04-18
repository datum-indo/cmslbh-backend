import * as TypeGraphQL from "type-graphql";
import { DeleteManyPersonDocumentArgs } from "./args/DeleteManyPersonDocumentArgs";
import { PersonDocument } from "../../../models/PersonDocument";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class DeleteManyPersonDocumentResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPersonDocumentArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).personDocument.deleteMany(args);
  }
}
