import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationWhereInput } from "../../../inputs/CaseConsultationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseConsultationArgs {
  @TypeGraphQL.Field(_type => CaseConsultationWhereInput, {
    nullable: true
  })
  where?: CaseConsultationWhereInput | undefined;
}
