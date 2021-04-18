import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationUpdateInput } from "../../../inputs/CaseConsultationUpdateInput";
import { CaseConsultationWhereUniqueInput } from "../../../inputs/CaseConsultationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseConsultationArgs {
  @TypeGraphQL.Field(_type => CaseConsultationUpdateInput, {
    nullable: false
  })
  data!: CaseConsultationUpdateInput;

  @TypeGraphQL.Field(_type => CaseConsultationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationWhereUniqueInput;
}
