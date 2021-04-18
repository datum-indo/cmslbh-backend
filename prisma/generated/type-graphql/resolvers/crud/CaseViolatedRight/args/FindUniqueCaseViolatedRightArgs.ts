import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolatedRightWhereUniqueInput } from "../../../inputs/CaseViolatedRightWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseViolatedRightArgs {
  @TypeGraphQL.Field(_type => CaseViolatedRightWhereUniqueInput, {
    nullable: false
  })
  where!: CaseViolatedRightWhereUniqueInput;
}
