import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseCategoryWhereInput } from "../../../inputs/CaseCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseCategoryArgs {
  @TypeGraphQL.Field(_type => CaseCategoryWhereInput, {
    nullable: true
  })
  where?: CaseCategoryWhereInput | undefined;
}
