import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressUpdateManyMutationInput } from "../../../inputs/CaseProgressUpdateManyMutationInput";
import { CaseProgressWhereInput } from "../../../inputs/CaseProgressWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseProgressArgs {
  @TypeGraphQL.Field(_type => CaseProgressUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseProgressUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseProgressWhereInput, {
    nullable: true
  })
  where?: CaseProgressWhereInput | undefined;
}
