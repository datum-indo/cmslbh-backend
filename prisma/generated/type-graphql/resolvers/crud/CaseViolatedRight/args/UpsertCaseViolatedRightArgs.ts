import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolatedRightCreateInput } from "../../../inputs/CaseViolatedRightCreateInput";
import { CaseViolatedRightUpdateInput } from "../../../inputs/CaseViolatedRightUpdateInput";
import { CaseViolatedRightWhereUniqueInput } from "../../../inputs/CaseViolatedRightWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseViolatedRightArgs {
  @TypeGraphQL.Field(_type => CaseViolatedRightWhereUniqueInput, {
    nullable: false
  })
  where!: CaseViolatedRightWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseViolatedRightCreateInput, {
    nullable: false
  })
  create!: CaseViolatedRightCreateInput;

  @TypeGraphQL.Field(_type => CaseViolatedRightUpdateInput, {
    nullable: false
  })
  update!: CaseViolatedRightUpdateInput;
}
