import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePkUpdateManyMutationInput } from "../../../inputs/CasePkUpdateManyMutationInput";
import { CasePkWhereInput } from "../../../inputs/CasePkWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCasePkArgs {
  @TypeGraphQL.Field(_type => CasePkUpdateManyMutationInput, {
    nullable: false
  })
  data!: CasePkUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CasePkWhereInput, {
    nullable: true
  })
  where?: CasePkWhereInput | undefined;
}
