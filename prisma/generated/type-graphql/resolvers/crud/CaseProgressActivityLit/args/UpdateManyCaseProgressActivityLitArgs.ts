import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityLitUpdateManyMutationInput } from "../../../inputs/CaseProgressActivityLitUpdateManyMutationInput";
import { CaseProgressActivityLitWhereInput } from "../../../inputs/CaseProgressActivityLitWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseProgressActivityLitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseProgressActivityLitUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereInput, {
    nullable: true
  })
  where?: CaseProgressActivityLitWhereInput | undefined;
}
