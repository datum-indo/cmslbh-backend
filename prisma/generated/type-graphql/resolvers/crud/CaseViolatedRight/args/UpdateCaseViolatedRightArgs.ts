import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolatedRightUpdateInput } from "../../../inputs/CaseViolatedRightUpdateInput";
import { CaseViolatedRightWhereUniqueInput } from "../../../inputs/CaseViolatedRightWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseViolatedRightArgs {
  @TypeGraphQL.Field(_type => CaseViolatedRightUpdateInput, {
    nullable: false
  })
  data!: CaseViolatedRightUpdateInput;

  @TypeGraphQL.Field(_type => CaseViolatedRightWhereUniqueInput, {
    nullable: false
  })
  where!: CaseViolatedRightWhereUniqueInput;
}
