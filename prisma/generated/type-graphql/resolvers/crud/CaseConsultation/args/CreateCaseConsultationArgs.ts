import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationCreateInput } from "../../../inputs/CaseConsultationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseConsultationArgs {
  @TypeGraphQL.Field(_type => CaseConsultationCreateInput, {
    nullable: false
  })
  data!: CaseConsultationCreateInput;
}
