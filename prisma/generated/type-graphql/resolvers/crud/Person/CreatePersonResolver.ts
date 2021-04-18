import * as TypeGraphQL from "type-graphql";
import { CreatePersonArgs } from "./args/CreatePersonArgs";
import { Person } from "../../../models/Person";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class CreatePersonResolver {
  @TypeGraphQL.Mutation(_returns => Person, {
    nullable: false
  })
  async createPerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePersonArgs): Promise<Person> {
    return getPrismaFromContext(ctx).person.create(args);
  }
}
