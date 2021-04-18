import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePelakuUpdateManyMutationInput } from "../../../inputs/CasePelakuUpdateManyMutationInput";
import { CasePelakuWhereInput } from "../../../inputs/CasePelakuWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCasePelakuArgs {
  @TypeGraphQL.Field(_type => CasePelakuUpdateManyMutationInput, {
    nullable: false
  })
  data!: CasePelakuUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CasePelakuWhereInput, {
    nullable: true
  })
  where?: CasePelakuWhereInput | undefined;
}
