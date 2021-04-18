import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressUpdateInput } from "../../../inputs/CaseProgressUpdateInput";
import { CaseProgressWhereUniqueInput } from "../../../inputs/CaseProgressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseProgressArgs {
  @TypeGraphQL.Field(_type => CaseProgressUpdateInput, {
    nullable: false
  })
  data!: CaseProgressUpdateInput;

  @TypeGraphQL.Field(_type => CaseProgressWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressWhereUniqueInput;
}
