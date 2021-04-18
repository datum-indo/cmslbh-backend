import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseCategoryCreateInput } from "../../../inputs/CaseCategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseCategoryArgs {
  @TypeGraphQL.Field(_type => CaseCategoryCreateInput, {
    nullable: false
  })
  data!: CaseCategoryCreateInput;
}
