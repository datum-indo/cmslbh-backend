import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolenceMethodUpdateInput } from "../../../inputs/CaseViolenceMethodUpdateInput";
import { CaseViolenceMethodWhereUniqueInput } from "../../../inputs/CaseViolenceMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseViolenceMethodArgs {
  @TypeGraphQL.Field(_type => CaseViolenceMethodUpdateInput, {
    nullable: false
  })
  data!: CaseViolenceMethodUpdateInput;

  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereUniqueInput, {
    nullable: false
  })
  where!: CaseViolenceMethodWhereUniqueInput;
}
