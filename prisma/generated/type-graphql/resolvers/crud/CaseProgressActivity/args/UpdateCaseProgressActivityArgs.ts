import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityUpdateInput } from "../../../inputs/CaseProgressActivityUpdateInput";
import { CaseProgressActivityWhereUniqueInput } from "../../../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseProgressActivityArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateInput, {
    nullable: false
  })
  data!: CaseProgressActivityUpdateInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityWhereUniqueInput;
}
