import * as TypeGraphQL from "type-graphql";
import { FindFirstPersonArgs } from "./args/FindFirstPersonArgs";
import { Person } from "../../../models/Person";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class FindFirstPersonResolver {
  @TypeGraphQL.Query(_returns => Person, {
    nullable: true
  })
  async findFirstPerson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPersonArgs): Promise<Person | null> {
    return getPrismaFromContext(ctx).person.findFirst(args);
  }
}
