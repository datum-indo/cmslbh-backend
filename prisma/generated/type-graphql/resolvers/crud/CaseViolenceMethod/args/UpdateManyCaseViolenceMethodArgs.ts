import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolenceMethodUpdateManyMutationInput } from "../../../inputs/CaseViolenceMethodUpdateManyMutationInput";
import { CaseViolenceMethodWhereInput } from "../../../inputs/CaseViolenceMethodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseViolenceMethodArgs {
  @TypeGraphQL.Field(_type => CaseViolenceMethodUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseViolenceMethodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereInput, {
    nullable: true
  })
  where?: CaseViolenceMethodWhereInput | undefined;
}
