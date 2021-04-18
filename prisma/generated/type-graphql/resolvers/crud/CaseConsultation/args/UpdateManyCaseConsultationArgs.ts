import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationUpdateManyMutationInput } from "../../../inputs/CaseConsultationUpdateManyMutationInput";
import { CaseConsultationWhereInput } from "../../../inputs/CaseConsultationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseConsultationArgs {
  @TypeGraphQL.Field(_type => CaseConsultationUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseConsultationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseConsultationWhereInput, {
    nullable: true
  })
  where?: CaseConsultationWhereInput | undefined;
}
