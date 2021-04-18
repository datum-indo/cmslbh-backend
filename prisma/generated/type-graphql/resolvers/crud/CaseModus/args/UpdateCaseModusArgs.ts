import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseModusUpdateInput } from "../../../inputs/CaseModusUpdateInput";
import { CaseModusWhereUniqueInput } from "../../../inputs/CaseModusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseModusArgs {
  @TypeGraphQL.Field(_type => CaseModusUpdateInput, {
    nullable: false
  })
  data!: CaseModusUpdateInput;

  @TypeGraphQL.Field(_type => CaseModusWhereUniqueInput, {
    nullable: false
  })
  where!: CaseModusWhereUniqueInput;
}
