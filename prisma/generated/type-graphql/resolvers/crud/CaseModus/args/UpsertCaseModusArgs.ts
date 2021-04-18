import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseModusCreateInput } from "../../../inputs/CaseModusCreateInput";
import { CaseModusUpdateInput } from "../../../inputs/CaseModusUpdateInput";
import { CaseModusWhereUniqueInput } from "../../../inputs/CaseModusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseModusArgs {
  @TypeGraphQL.Field(_type => CaseModusWhereUniqueInput, {
    nullable: false
  })
  where!: CaseModusWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseModusCreateInput, {
    nullable: false
  })
  create!: CaseModusCreateInput;

  @TypeGraphQL.Field(_type => CaseModusUpdateInput, {
    nullable: false
  })
  update!: CaseModusUpdateInput;
}
