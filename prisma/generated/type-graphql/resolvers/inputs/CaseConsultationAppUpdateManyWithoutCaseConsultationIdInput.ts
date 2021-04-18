import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput } from "../inputs/CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput";
import { CaseConsultationAppCreateWithoutCaseConsultationIdInput } from "../inputs/CaseConsultationAppCreateWithoutCaseConsultationIdInput";
import { CaseConsultationAppScalarWhereInput } from "../inputs/CaseConsultationAppScalarWhereInput";
import { CaseConsultationAppUpdateManyWithWhereWithoutCaseConsultationIdInput } from "../inputs/CaseConsultationAppUpdateManyWithWhereWithoutCaseConsultationIdInput";
import { CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput } from "../inputs/CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput";
import { CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput } from "../inputs/CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput";
import { CaseConsultationAppWhereUniqueInput } from "../inputs/CaseConsultationAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput {
  @TypeGraphQL.Field(_type => [CaseConsultationAppCreateWithoutCaseConsultationIdInput], {
    nullable: true
  })
  create?: CaseConsultationAppCreateWithoutCaseConsultationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput], {
    nullable: true
  })
  upsert?: CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseConsultationAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppWhereUniqueInput], {
    nullable: true
  })
  set?: CaseConsultationAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseConsultationAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseConsultationAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput], {
    nullable: true
  })
  update?: CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppUpdateManyWithWhereWithoutCaseConsultationIdInput], {
    nullable: true
  })
  updateMany?: CaseConsultationAppUpdateManyWithWhereWithoutCaseConsultationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseConsultationAppScalarWhereInput[] | undefined;
}
