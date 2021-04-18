import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityCreateInput } from "../../../inputs/CaseProgressActivityCreateInput";
import { CaseProgressActivityUpdateInput } from "../../../inputs/CaseProgressActivityUpdateInput";
import { CaseProgressActivityWhereUniqueInput } from "../../../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseProgressActivityArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateInput, {
    nullable: false
  })
  create!: CaseProgressActivityCreateInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateInput, {
    nullable: false
  })
  update!: CaseProgressActivityUpdateInput;
}
