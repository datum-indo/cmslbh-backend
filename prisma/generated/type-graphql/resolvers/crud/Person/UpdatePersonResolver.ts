import * as TypeGraphQL from "type-graphql";
import { UpdatePersonArgs } from "./args/UpdatePersonArgs";
import { Person } from "../../../models/Person";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class UpdatePersonResolver {
  @TypeGraphQL.Mutation(_returns => Person, {
    nullable: true
  })
  async updatePerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePersonArgs): Promise<Person | null> {
    return getPrismaFromContext(ctx).person.update(args);
  }
}
