import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationAppUpdateManyMutationInput } from "../../../inputs/CaseConsultationAppUpdateManyMutationInput";
import { CaseConsultationAppWhereInput } from "../../../inputs/CaseConsultationAppWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseConsultationAppArgs {
  @TypeGraphQL.Field(_type => CaseConsultationAppUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseConsultationAppUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseConsultationAppWhereInput, {
    nullable: true
  })
  where?: CaseConsultationAppWhereInput | undefined;
}
