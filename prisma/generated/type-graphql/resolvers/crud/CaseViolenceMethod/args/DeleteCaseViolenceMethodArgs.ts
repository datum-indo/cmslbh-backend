import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolenceMethodWhereUniqueInput } from "../../../inputs/CaseViolenceMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCaseViolenceMethodArgs {
  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereUniqueInput, {
    nullable: false
  })
  where!: CaseViolenceMethodWhereUniqueInput;
}
