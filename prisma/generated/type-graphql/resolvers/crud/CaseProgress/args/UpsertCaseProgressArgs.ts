import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressCreateInput } from "../../../inputs/CaseProgressCreateInput";
import { CaseProgressUpdateInput } from "../../../inputs/CaseProgressUpdateInput";
import { CaseProgressWhereUniqueInput } from "../../../inputs/CaseProgressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseProgressArgs {
  @TypeGraphQL.Field(_type => CaseProgressWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressCreateInput, {
    nullable: false
  })
  create!: CaseProgressCreateInput;

  @TypeGraphQL.Field(_type => CaseProgressUpdateInput, {
    nullable: false
  })
  update!: CaseProgressUpdateInput;
}
