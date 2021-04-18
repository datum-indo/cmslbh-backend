import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationAppUpdateInput } from "../../../inputs/CaseConsultationAppUpdateInput";
import { CaseConsultationAppWhereUniqueInput } from "../../../inputs/CaseConsultationAppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseConsultationAppArgs {
  @TypeGraphQL.Field(_type => CaseConsultationAppUpdateInput, {
    nullable: false
  })
  data!: CaseConsultationAppUpdateInput;

  @TypeGraphQL.Field(_type => CaseConsultationAppWhereUniqueInput, {
    nullable: false
  })
  where!: CaseConsultationAppWhereUniqueInput;
}
