import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseCategoryWhereUniqueInput } from "../../../inputs/CaseCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseCategoryArgs {
  @TypeGraphQL.Field(_type => CaseCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CaseCategoryWhereUniqueInput;
}
