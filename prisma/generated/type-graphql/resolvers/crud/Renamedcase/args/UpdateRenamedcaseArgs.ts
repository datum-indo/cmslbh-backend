import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RenamedcaseUpdateInput } from "../../../inputs/RenamedcaseUpdateInput";
import { RenamedcaseWhereUniqueInput } from "../../../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRenamedcaseArgs {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateInput, {
    nullable: false
  })
  data!: RenamedcaseUpdateInput;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: false
  })
  where!: RenamedcaseWhereUniqueInput;
}
