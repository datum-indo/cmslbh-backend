import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationAppWhereUniqueInput } from "../../../inputs/CaseConsultationAppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCaseConsultationAppArgs {
  @TypeGraphQL.Field(_type => CaseConsultationAppWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationAppWhereUniqueInput;
}
