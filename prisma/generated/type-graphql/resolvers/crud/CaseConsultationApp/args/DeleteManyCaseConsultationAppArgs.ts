import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationAppWhereInput } from "../../../inputs/CaseConsultationAppWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseConsultationAppArgs {
  @TypeGraphQL.Field(_type => CaseConsultationAppWhereInput, {
    nullable: true
  })
  where?: CaseConsultationAppWhereInput | undefined;
}
