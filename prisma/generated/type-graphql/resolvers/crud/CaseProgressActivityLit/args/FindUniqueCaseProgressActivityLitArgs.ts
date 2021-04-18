import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityLitWhereUniqueInput } from "../../../inputs/CaseProgressActivityLitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseProgressActivityLitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityLitWhereUniqueInput;
}
