import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePersonArgs } from "./args/AggregatePersonArgs";
import { CreatePersonArgs } from "./args/CreatePersonArgs";
import { DeleteManyPersonArgs } from "./args/DeleteManyPersonArgs";
import { DeletePersonArgs } from "./args/DeletePersonArgs";
import { FindFirstPersonArgs } from "./args/FindFirstPersonArgs";
import { FindManyPersonArgs } from "./args/FindManyPersonArgs";
import { FindUniquePersonArgs } from "./args/FindUniquePersonArgs";
import { UpdateManyPersonArgs } from "./args/UpdateManyPersonArgs";
import { UpdatePersonArgs } from "./args/UpdatePersonArgs";
import { UpsertPersonArgs } from "./args/UpsertPersonArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Person } from "../../../models/Person";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePerson } from "../../outputs/AggregatePerson";

@TypeGraphQL.Resolver(_of => Person)
export class PersonCrudResolver {
  @TypeGraphQL.Query(_returns => Person, {
    nullable: true
  })
  async person(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePersonArgs): Promise<Person | null> {
    return getPrismaFromContext(ctx).person.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Person, {
    nullable: true
  })
  async findFirstPerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPersonArgs): Promise<Person | null> {
    return getPrismaFromContext(ctx).person.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Person], {
    nullable: false
  })
  async people(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPersonArgs): Promise<Person[]> {
    return getPrismaFromContext(ctx).person.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Person, {
    nullable: false
  })
  async createPerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePersonArgs): Promise<Person> {
    return getPrismaFromContext(ctx).person.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Person, {
    nullable: true
  })
  async deletePerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeletePersonArgs): Promise<Person | null> {
    return getPrismaFromContext(ctx).person.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Person, {
    nullable: true
  })
  async updatePerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePersonArgs): Promise<Person | null> {
    return getPrismaFromContext(ctx).person.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPersonArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).person.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPersonArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).person.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Person, {
    nullable: false
  })
  async upsertPerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertPersonArgs): Promise<Person> {
    return getPrismaFromContext(ctx).person.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregatePerson, {
    nullable: false
  })
  async aggregatePerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePersonArgs): Promise<AggregatePerson> {
    return getPrismaFromContext(ctx).person.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
