import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressWhereUniqueInput } from "../../../inputs/CaseProgressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseProgressArgs {
  @TypeGraphQL.Field(_type => CaseProgressWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressWhereUniqueInput;
}
