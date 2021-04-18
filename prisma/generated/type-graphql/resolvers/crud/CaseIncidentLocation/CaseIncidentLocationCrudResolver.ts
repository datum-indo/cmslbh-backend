import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCaseIncidentLocationArgs } from "./args/AggregateCaseIncidentLocationArgs";
import { CreateCaseIncidentLocationArgs } from "./args/CreateCaseIncidentLocationArgs";
import { DeleteCaseIncidentLocationArgs } from "./args/DeleteCaseIncidentLocationArgs";
import { DeleteManyCaseIncidentLocationArgs } from "./args/DeleteManyCaseIncidentLocationArgs";
import { FindFirstCaseIncidentLocationArgs } from "./args/FindFirstCaseIncidentLocationArgs";
import { FindManyCaseIncidentLocationArgs } from "./args/FindManyCaseIncidentLocationArgs";
import { FindUniqueCaseIncidentLocationArgs } from "./args/FindUniqueCaseIncidentLocationArgs";
import { UpdateCaseIncidentLocationArgs } from "./args/UpdateCaseIncidentLocationArgs";
import { UpdateManyCaseIncidentLocationArgs } from "./args/UpdateManyCaseIncidentLocationArgs";
import { UpsertCaseIncidentLocationArgs } from "./args/UpsertCaseIncidentLocationArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CaseIncidentLocation } from "../../../models/CaseIncidentLocation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCaseIncidentLocation } from "../../outputs/AggregateCaseIncidentLocation";

@TypeGraphQL.Resolver(_of => CaseIncidentLocation)
export class CaseIncidentLocationCrudResolver {
  @TypeGraphQL.Query(_returns => CaseIncidentLocation, {
    nullable: true
  })
  async caseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseIncidentLocationArgs): Promise<CaseIncidentLocation | null> {
    return getPrismaFromContext(ctx).caseIncidentLocation.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CaseIncidentLocation, {
    nullable: true
  })
  async findFirstCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseIncidentLocationArgs): Promise<CaseIncidentLocation | null> {
    return getPrismaFromContext(ctx).caseIncidentLocation.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CaseIncidentLocation], {
    nullable: false
  })
  async caseIncidentLocations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseIncidentLocationArgs): Promise<CaseIncidentLocation[]> {
    return getPrismaFromContext(ctx).caseIncidentLocation.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseIncidentLocation, {
    nullable: false
  })
  async createCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseIncidentLocationArgs): Promise<CaseIncidentLocation> {
    return getPrismaFromContext(ctx).caseIncidentLocation.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseIncidentLocation, {
    nullable: true
  })
  async deleteCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseIncidentLocationArgs): Promise<CaseIncidentLocation | null> {
    return getPrismaFromContext(ctx).caseIncidentLocation.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseIncidentLocation, {
    nullable: true
  })
  async updateCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseIncidentLocationArgs): Promise<CaseIncidentLocation | null> {
    return getPrismaFromContext(ctx).caseIncidentLocation.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseIncidentLocationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseIncidentLocation.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseIncidentLocationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseIncidentLocation.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CaseIncidentLocation, {
    nullable: false
  })
  async upsertCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseIncidentLocationArgs): Promise<CaseIncidentLocation> {
    return getPrismaFromContext(ctx).caseIncidentLocation.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCaseIncidentLocation, {
    nullable: false
  })
  async aggregateCaseIncidentLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCaseIncidentLocationArgs): Promise<AggregateCaseIncidentLocation> {
    return getPrismaFromContext(ctx).caseIncidentLocation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
