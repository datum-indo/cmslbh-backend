import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseModusUpdateManyMutationInput } from "../../../inputs/CaseModusUpdateManyMutationInput";
import { CaseModusWhereInput } from "../../../inputs/CaseModusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseModusArgs {
  @TypeGraphQL.Field(_type => CaseModusUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseModusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseModusWhereInput, {
    nullable: true
  })
  where?: CaseModusWhereInput | undefined;
}
