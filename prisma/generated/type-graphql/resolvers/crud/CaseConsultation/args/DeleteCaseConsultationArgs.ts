import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationWhereUniqueInput } from "../../../inputs/CaseConsultationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCaseConsultationArgs {
  @TypeGraphQL.Field(_type => CaseConsultationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationWhereUniqueInput;
}
