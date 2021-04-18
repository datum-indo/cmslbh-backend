import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolatedRightCreateInput } from "../../../inputs/CaseViolatedRightCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseViolatedRightArgs {
  @TypeGraphQL.Field(_type => CaseViolatedRightCreateInput, {
    nullable: false
  })
  data!: CaseViolatedRightCreateInput;
}
