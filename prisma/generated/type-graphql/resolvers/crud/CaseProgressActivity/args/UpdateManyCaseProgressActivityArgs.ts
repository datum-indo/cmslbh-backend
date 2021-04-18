import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityUpdateManyMutationInput } from "../../../inputs/CaseProgressActivityUpdateManyMutationInput";
import { CaseProgressActivityWhereInput } from "../../../inputs/CaseProgressActivityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseProgressActivityArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseProgressActivityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityWhereInput, {
    nullable: true
  })
  where?: CaseProgressActivityWhereInput | undefined;
}
