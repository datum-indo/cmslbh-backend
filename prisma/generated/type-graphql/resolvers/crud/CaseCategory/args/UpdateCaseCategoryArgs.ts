import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseCategoryUpdateInput } from "../../../inputs/CaseCategoryUpdateInput";
import { CaseCategoryWhereUniqueInput } from "../../../inputs/CaseCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseCategoryArgs {
  @TypeGraphQL.Field(_type => CaseCategoryUpdateInput, {
    nullable: false
  })
  data!: CaseCategoryUpdateInput;

  @TypeGraphQL.Field(_type => CaseCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CaseCategoryWhereUniqueInput;
}
