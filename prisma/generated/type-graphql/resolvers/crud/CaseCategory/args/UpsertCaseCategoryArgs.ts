import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseCategoryCreateInput } from "../../../inputs/CaseCategoryCreateInput";
import { CaseCategoryUpdateInput } from "../../../inputs/CaseCategoryUpdateInput";
import { CaseCategoryWhereUniqueInput } from "../../../inputs/CaseCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseCategoryArgs {
  @TypeGraphQL.Field(_type => CaseCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CaseCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseCategoryCreateInput, {
    nullable: false
  })
  create!: CaseCategoryCreateInput;

  @TypeGraphQL.Field(_type => CaseCategoryUpdateInput, {
    nullable: false
  })
  update!: CaseCategoryUpdateInput;
}
