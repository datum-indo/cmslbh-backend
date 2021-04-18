import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseConsultationOrderByInput } from "../../../inputs/CaseConsultationOrderByInput";
import { CaseConsultationWhereInput } from "../../../inputs/CaseConsultationWhereInput";
import { CaseConsultationWhereUniqueInput } from "../../../inputs/CaseConsultationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCaseConsultationArgs {
  @TypeGraphQL.Field(_type => CaseConsultationWhereInput, {
    nullable: true
  })
  where?: CaseConsultationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationOrderByInput], {
    nullable: true
  })
  orderBy?: CaseConsultationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseConsultationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
