import * as TypeGraphQL from "type-graphql";
import { FindManyPersonArgs } from "./args/FindManyPersonArgs";
import { Person } from "../../../models/Person";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class FindManyPersonResolver {
  @TypeGraphQL.Query(_returns => [Person], {
    nullable: false
  })
  async people(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPersonArgs): Promise<Person[]> {
    return getPrismaFromContext(ctx).person.findMany(args);
  }
}
