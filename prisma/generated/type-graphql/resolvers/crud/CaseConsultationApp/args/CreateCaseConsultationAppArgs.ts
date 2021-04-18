import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationAppCreateInput } from "../../../inputs/CaseConsultationAppCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseConsultationAppArgs {
  @TypeGraphQL.Field(_type => CaseConsultationAppCreateInput, {
    nullable: false
  })
  data!: CaseConsultationAppCreateInput;
}
