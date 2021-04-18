import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolatedRightUpdateManyMutationInput } from "../../../inputs/CaseViolatedRightUpdateManyMutationInput";
import { CaseViolatedRightWhereInput } from "../../../inputs/CaseViolatedRightWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseViolatedRightArgs {
  @TypeGraphQL.Field(_type => CaseViolatedRightUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseViolatedRightUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseViolatedRightWhereInput, {
    nullable: true
  })
  where?: CaseViolatedRightWhereInput | undefined;
}
