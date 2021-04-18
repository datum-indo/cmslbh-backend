import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationCreateInput } from "../../../inputs/CaseConsultationCreateInput";
import { CaseConsultationUpdateInput } from "../../../inputs/CaseConsultationUpdateInput";
import { CaseConsultationWhereUniqueInput } from "../../../inputs/CaseConsultationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseConsultationArgs {
  @TypeGraphQL.Field(_type => CaseConsultationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseConsultationCreateInput, {
    nullable: false
  })
  create!: CaseConsultationCreateInput;

  @TypeGraphQL.Field(_type => CaseConsultationUpdateInput, {
    nullable: false
  })
  update!: CaseConsultationUpdateInput;
}
