import * as TypeGraphQL from "type-graphql";
import { FindUniquePersonArgs } from "./args/FindUniquePersonArgs";
import { Person } from "../../../models/Person";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class FindUniquePersonResolver {
  @TypeGraphQL.Query(_returns => Person, {
    nullable: true
  })
  async person(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePersonArgs): Promise<Person | null> {
    return getPrismaFromContext(ctx).person.findUnique(args);
  }
}
