import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolenceMethodCreateInput } from "../../../inputs/CaseViolenceMethodCreateInput";
import { CaseViolenceMethodUpdateInput } from "../../../inputs/CaseViolenceMethodUpdateInput";
import { CaseViolenceMethodWhereUniqueInput } from "../../../inputs/CaseViolenceMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseViolenceMethodArgs {
  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereUniqueInput, {
    nullable: false
  })
  where!: CaseViolenceMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseViolenceMethodCreateInput, {
    nullable: false
  })
  create!: CaseViolenceMethodCreateInput;

  @TypeGraphQL.Field(_type => CaseViolenceMethodUpdateInput, {
    nullable: false
  })
  update!: CaseViolenceMethodUpdateInput;
}
