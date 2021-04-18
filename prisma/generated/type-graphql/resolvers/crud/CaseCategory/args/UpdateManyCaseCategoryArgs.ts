import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseCategoryUpdateManyMutationInput } from "../../../inputs/CaseCategoryUpdateManyMutationInput";
import { CaseCategoryWhereInput } from "../../../inputs/CaseCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseCategoryArgs {
  @TypeGraphQL.Field(_type => CaseCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseCategoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseCategoryWhereInput, {
    nullable: true
  })
  where?: CaseCategoryWhereInput | undefined;
}
