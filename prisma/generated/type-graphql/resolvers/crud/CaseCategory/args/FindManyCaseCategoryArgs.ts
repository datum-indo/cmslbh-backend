import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseCategoryOrderByInput } from "../../../inputs/CaseCategoryOrderByInput";
import { CaseCategoryWhereInput } from "../../../inputs/CaseCategoryWhereInput";
import { CaseCategoryWhereUniqueInput } from "../../../inputs/CaseCategoryWhereUniqueInput";
import { CaseCategoryScalarFieldEnum } from "../../../../enums/CaseCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCaseCategoryArgs {
  @TypeGraphQL.Field(_type => CaseCategoryWhereInput, {
    nullable: true
  })
  where?: CaseCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryOrderByInput], {
    nullable: true
  })
  orderBy?: CaseCategoryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseCategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "kodeMt" | "case_id"> | undefined;
}
