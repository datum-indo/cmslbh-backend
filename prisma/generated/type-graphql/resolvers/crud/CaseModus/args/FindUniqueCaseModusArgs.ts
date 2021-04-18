import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseModusWhereUniqueInput } from "../../../inputs/CaseModusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseModusArgs {
  @TypeGraphQL.Field(_type => CaseModusWhereUniqueInput, {
    nullable: false
  })
  where!: CaseModusWhereUniqueInput;
}
