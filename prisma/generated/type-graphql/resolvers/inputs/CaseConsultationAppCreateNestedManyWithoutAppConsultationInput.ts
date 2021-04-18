import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppCreateOrConnectWithoutAppConsultationInput } from "../inputs/CaseConsultationAppCreateOrConnectWithoutAppConsultationInput";
import { CaseConsultationAppCreateWithoutAppConsultationInput } from "../inputs/CaseConsultationAppCreateWithoutAppConsultationInput";
import { CaseConsultationAppWhereUniqueInput } from "../inputs/CaseConsultationAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppCreateNestedManyWithoutAppConsultationInput {
  @TypeGraphQL.Field(_type => [CaseConsultationAppCreateWithoutAppConsultationInput], {
    nullable: true
  })
  create?: CaseConsultationAppCreateWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppCreateOrConnectWithoutAppConsultationInput], {
    nullable: true
  })
  connectOrCreate?: CaseConsultationAppCreateOrConnectWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseConsultationAppWhereUniqueInput[] | undefined;
}
