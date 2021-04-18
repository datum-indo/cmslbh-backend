import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationAppCreateInput } from "../../../inputs/CaseConsultationAppCreateInput";
import { CaseConsultationAppUpdateInput } from "../../../inputs/CaseConsultationAppUpdateInput";
import { CaseConsultationAppWhereUniqueInput } from "../../../inputs/CaseConsultationAppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseConsultationAppArgs {
  @TypeGraphQL.Field(_type => CaseConsultationAppWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationAppWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseConsultationAppCreateInput, {
    nullable: false
  })
  create!: CaseConsultationAppCreateInput;

  @TypeGraphQL.Field(_type => CaseConsultationAppUpdateInput, {
    nullable: false
  })
  update!: CaseConsultationAppUpdateInput;
}
