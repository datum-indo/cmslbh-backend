import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseConsultationCreateOrConnectWithoutCaseIdInput";
import { CaseConsultationCreateWithoutCaseIdInput } from "../inputs/CaseConsultationCreateWithoutCaseIdInput";
import { CaseConsultationScalarWhereInput } from "../inputs/CaseConsultationScalarWhereInput";
import { CaseConsultationUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseConsultationUpdateManyWithWhereWithoutCaseIdInput";
import { CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseConsultationWhereUniqueInput } from "../inputs/CaseConsultationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseConsultationCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseConsultationCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseConsultationCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseConsultationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationWhereUniqueInput], {
    nullable: true
  })
  set?: CaseConsultationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseConsultationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseConsultationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseConsultationUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseConsultationScalarWhereInput[] | undefined;
}
