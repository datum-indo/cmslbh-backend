import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RenamedcaseCreateInput } from "../../../inputs/RenamedcaseCreateInput";
import { RenamedcaseUpdateInput } from "../../../inputs/RenamedcaseUpdateInput";
import { RenamedcaseWhereUniqueInput } from "../../../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRenamedcaseArgs {
  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: false
  })
  where!: RenamedcaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateInput, {
    nullable: false
  })
  create!: RenamedcaseCreateInput;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateInput;
}
