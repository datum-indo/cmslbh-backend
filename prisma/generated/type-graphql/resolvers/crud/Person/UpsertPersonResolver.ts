import * as TypeGraphQL from "type-graphql";
import { UpsertPersonArgs } from "./args/UpsertPersonArgs";
import { Person } from "../../../models/Person";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class UpsertPersonResolver {
  @TypeGraphQL.Mutation(_returns => Person, {
    nullable: false
  })
  async upsertPerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertPersonArgs): Promise<Person> {
    return getPrismaFromContext(ctx).person.upsert(args);
  }
}
