import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityNonlitUpdateManyMutationInput } from "../../../inputs/CaseProgressActivityNonlitUpdateManyMutationInput";
import { CaseProgressActivityNonlitWhereInput } from "../../../inputs/CaseProgressActivityNonlitWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseProgressActivityNonlitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseProgressActivityNonlitUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereInput, {
    nullable: true
  })
  where?: CaseProgressActivityNonlitWhereInput | undefined;
}
