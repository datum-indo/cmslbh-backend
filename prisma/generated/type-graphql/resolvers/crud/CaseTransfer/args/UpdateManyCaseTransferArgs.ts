import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseTransferUpdateManyMutationInput } from "../../../inputs/CaseTransferUpdateManyMutationInput";
import { CaseTransferWhereInput } from "../../../inputs/CaseTransferWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseTransferArgs {
  @TypeGraphQL.Field(_type => CaseTransferUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseTransferUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseTransferWhereInput, {
    nullable: true
  })
  where?: CaseTransferWhereInput | undefined;
}
