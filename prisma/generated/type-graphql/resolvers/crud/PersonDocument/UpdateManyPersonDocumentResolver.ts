import * as TypeGraphQL from "type-graphql";
import { UpdateManyPersonDocumentArgs } from "./args/UpdateManyPersonDocumentArgs";
import { PersonDocument } from "../../../models/PersonDocument";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class UpdateManyPersonDocumentResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPersonDocumentArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).personDocument.updateMany(args);
  }
}
