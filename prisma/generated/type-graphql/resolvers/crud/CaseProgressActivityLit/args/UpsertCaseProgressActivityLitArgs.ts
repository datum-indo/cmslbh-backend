import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityLitCreateInput } from "../../../inputs/CaseProgressActivityLitCreateInput";
import { CaseProgressActivityLitUpdateInput } from "../../../inputs/CaseProgressActivityLitUpdateInput";
import { CaseProgressActivityLitWhereUniqueInput } from "../../../inputs/CaseProgressActivityLitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseProgressActivityLitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityLitWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitCreateInput, {
    nullable: false
  })
  create!: CaseProgressActivityLitCreateInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitUpdateInput, {
    nullable: false
  })
  update!: CaseProgressActivityLitUpdateInput;
}
