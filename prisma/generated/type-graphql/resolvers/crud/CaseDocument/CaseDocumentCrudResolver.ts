import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseDocumentArgs } from "./args/AggregateCaseDocumentArgs";
import { CreateCaseDocumentArgs } from "./args/CreateCaseDocumentArgs";
import { DeleteCaseDocumentArgs } from "./args/DeleteCaseDocumentArgs";
import { DeleteManyCaseDocumentArgs } from "./args/DeleteManyCaseDocumentArgs";
import { FindFirstCaseDocumentArgs } from "./args/FindFirstCaseDocumentArgs";
import { FindManyCaseDocumentArgs } from "./args/FindManyCaseDocumentArgs";
import { FindUniqueCaseDocumentArgs } from "./args/FindUniqueCaseDocumentArgs";
import { UpdateCaseDocumentArgs } from "./args/UpdateCaseDocumentArgs";
import { UpdateManyCaseDocumentArgs } from "./args/UpdateManyCaseDocumentArgs";
import { UpsertCaseDocumentArgs } from "./args/UpsertCaseDocumentArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseDocument } from "../../../models/CaseDocument";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseDocument } from "../../outputs/AggregateCaseDocument";

@TypeGraphQL.Resolver(_of => CaseDocument)
export class CaseDocumentCrudResolver {
  @TypeGraphQL.Query(_returns => CaseDocument, {
    nullable: true
  })
  async caseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseDocumentArgs): Promise<CaseDocument | null> {
    return getPrismaFromContext(ctx).caseDocument.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseDocument, {
    nullable: true
  })
  async findFirstCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseDocumentArgs): Promise<CaseDocument | null> {
    return getPrismaFromContext(ctx).caseDocument.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseDocument], {
    nullable: false
  })
  async caseDocuments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseDocumentArgs): Promise<CaseDocument[]> {
    return getPrismaFromContext(ctx).caseDocument.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseDocument, {
    nullable: false
  })
  async createCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseDocumentArgs): Promise<CaseDocument> {
    return getPrismaFromContext(ctx).caseDocument.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseDocument, {
    nullable: true
  })
  async deleteCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseDocumentArgs): Promise<CaseDocument | null> {
    return getPrismaFromContext(ctx).caseDocument.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseDocument, {
    nullable: true
  })
  async updateCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseDocumentArgs): Promise<CaseDocument | null> {
    return getPrismaFromContext(ctx).caseDocument.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseDocumentArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseDocument.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseDocumentArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseDocument.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseDocument, {
    nullable: false
  })
  async upsertCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseDocumentArgs): Promise<CaseDocument> {
    return getPrismaFromContext(ctx).caseDocument.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseDocument, {
    nullable: false
  })
  async aggregateCaseDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseDocumentArgs): Promise<AggregateCaseDocument> {
    return getPrismaFromContext(ctx).caseDocument.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
