import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePersonDocumentArgs } from "./args/AggregatePersonDocumentArgs";
import { CreatePersonDocumentArgs } from "./args/CreatePersonDocumentArgs";
import { DeleteManyPersonDocumentArgs } from "./args/DeleteManyPersonDocumentArgs";
import { DeletePersonDocumentArgs } from "./args/DeletePersonDocumentArgs";
import { FindFirstPersonDocumentArgs } from "./args/FindFirstPersonDocumentArgs";
import { FindManyPersonDocumentArgs } from "./args/FindManyPersonDocumentArgs";
import { FindUniquePersonDocumentArgs } from "./args/FindUniquePersonDocumentArgs";
import { UpdateManyPersonDocumentArgs } from "./args/UpdateManyPersonDocumentArgs";
import { UpdatePersonDocumentArgs } from "./args/UpdatePersonDocumentArgs";
import { UpsertPersonDocumentArgs } from "./args/UpsertPersonDocumentArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { PersonDocument } from "../../../models/PersonDocument";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePersonDocument } from "../../outputs/AggregatePersonDocument";

@TypeGraphQL.Resolver(_of => PersonDocument)
export class PersonDocumentCrudResolver {
  @TypeGraphQL.Query(_returns => PersonDocument, {
    nullable: true
  })
  async personDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePersonDocumentArgs): Promise<PersonDocument | null> {
    return getPrismaFromContext(ctx).personDocument.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => PersonDocument, {
    nullable: true
  })
  async findFirstPersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPersonDocumentArgs): Promise<PersonDocument | null> {
    return getPrismaFromContext(ctx).personDocument.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [PersonDocument], {
    nullable: false
  })
  async personDocuments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPersonDocumentArgs): Promise<PersonDocument[]> {
    return getPrismaFromContext(ctx).personDocument.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => PersonDocument, {
    nullable: false
  })
  async createPersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePersonDocumentArgs): Promise<PersonDocument> {
    return getPrismaFromContext(ctx).personDocument.create(args);
  }

  @TypeGraphQL.Mutation(_returns => PersonDocument, {
    nullable: true
  })
  async deletePersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeletePersonDocumentArgs): Promise<PersonDocument | null> {
    return getPrismaFromContext(ctx).personDocument.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => PersonDocument, {
    nullable: true
  })
  async updatePersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePersonDocumentArgs): Promise<PersonDocument | null> {
    return getPrismaFromContext(ctx).personDocument.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPersonDocumentArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).personDocument.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPersonDocumentArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).personDocument.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => PersonDocument, {
    nullable: false
  })
  async upsertPersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertPersonDocumentArgs): Promise<PersonDocument> {
    return getPrismaFromContext(ctx).personDocument.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregatePersonDocument, {
    nullable: false
  })
  async aggregatePersonDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePersonDocumentArgs): Promise<AggregatePersonDocument> {
    return getPrismaFromContext(ctx).personDocument.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
