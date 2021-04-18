import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDaftarPengacaraArgs } from "./args/AggregateDaftarPengacaraArgs";
import { CreateDaftarPengacaraArgs } from "./args/CreateDaftarPengacaraArgs";
import { DeleteDaftarPengacaraArgs } from "./args/DeleteDaftarPengacaraArgs";
import { DeleteManyDaftarPengacaraArgs } from "./args/DeleteManyDaftarPengacaraArgs";
import { FindFirstDaftarPengacaraArgs } from "./args/FindFirstDaftarPengacaraArgs";
import { FindManyDaftarPengacaraArgs } from "./args/FindManyDaftarPengacaraArgs";
import { FindUniqueDaftarPengacaraArgs } from "./args/FindUniqueDaftarPengacaraArgs";
import { UpdateDaftarPengacaraArgs } from "./args/UpdateDaftarPengacaraArgs";
import { UpdateManyDaftarPengacaraArgs } from "./args/UpdateManyDaftarPengacaraArgs";
import { UpsertDaftarPengacaraArgs } from "./args/UpsertDaftarPengacaraArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { DaftarPengacara } from "../../../models/DaftarPengacara";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDaftarPengacara } from "../../outputs/AggregateDaftarPengacara";

@TypeGraphQL.Resolver(_of => DaftarPengacara)
export class DaftarPengacaraCrudResolver {
  @TypeGraphQL.Query(_returns => DaftarPengacara, {
    nullable: true
  })
  async daftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDaftarPengacaraArgs): Promise<DaftarPengacara | null> {
    return getPrismaFromContext(ctx).daftarPengacara.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => DaftarPengacara, {
    nullable: true
  })
  async findFirstDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDaftarPengacaraArgs): Promise<DaftarPengacara | null> {
    return getPrismaFromContext(ctx).daftarPengacara.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [DaftarPengacara], {
    nullable: false
  })
  async daftarPengacaras(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDaftarPengacaraArgs): Promise<DaftarPengacara[]> {
    return getPrismaFromContext(ctx).daftarPengacara.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DaftarPengacara, {
    nullable: false
  })
  async createDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDaftarPengacaraArgs): Promise<DaftarPengacara> {
    return getPrismaFromContext(ctx).daftarPengacara.create(args);
  }

  @TypeGraphQL.Mutation(_returns => DaftarPengacara, {
    nullable: true
  })
  async deleteDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDaftarPengacaraArgs): Promise<DaftarPengacara | null> {
    return getPrismaFromContext(ctx).daftarPengacara.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => DaftarPengacara, {
    nullable: true
  })
  async updateDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDaftarPengacaraArgs): Promise<DaftarPengacara | null> {
    return getPrismaFromContext(ctx).daftarPengacara.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDaftarPengacaraArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).daftarPengacara.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDaftarPengacaraArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).daftarPengacara.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DaftarPengacara, {
    nullable: false
  })
  async upsertDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDaftarPengacaraArgs): Promise<DaftarPengacara> {
    return getPrismaFromContext(ctx).daftarPengacara.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateDaftarPengacara, {
    nullable: false
  })
  async aggregateDaftarPengacara(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDaftarPengacaraArgs): Promise<AggregateDaftarPengacara> {
    return getPrismaFromContext(ctx).daftarPengacara.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
