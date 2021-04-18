import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityWhereUniqueInput } from "../../../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseProgressActivityArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityWhereUniqueInput;
}
