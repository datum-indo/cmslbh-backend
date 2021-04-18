import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationAppCreateOrConnectWithoutAppConsultationInput } from "../inputs/CaseConsultationAppCreateOrConnectWithoutAppConsultationInput";
import { CaseConsultationAppCreateWithoutAppConsultationInput } from "../inputs/CaseConsultationAppCreateWithoutAppConsultationInput";
import { CaseConsultationAppScalarWhereInput } from "../inputs/CaseConsultationAppScalarWhereInput";
import { CaseConsultationAppUpdateManyWithWhereWithoutAppConsultationInput } from "../inputs/CaseConsultationAppUpdateManyWithWhereWithoutAppConsultationInput";
import { CaseConsultationAppUpdateWithWhereUniqueWithoutAppConsultationInput } from "../inputs/CaseConsultationAppUpdateWithWhereUniqueWithoutAppConsultationInput";
import { CaseConsultationAppUpsertWithWhereUniqueWithoutAppConsultationInput } from "../inputs/CaseConsultationAppUpsertWithWhereUniqueWithoutAppConsultationInput";
import { CaseConsultationAppWhereUniqueInput } from "../inputs/CaseConsultationAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppUpdateManyWithoutAppConsultationInput {
  @TypeGraphQL.Field(_type => [CaseConsultationAppCreateWithoutAppConsultationInput], {
    nullable: true
  })
  create?: CaseConsultationAppCreateWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppCreateOrConnectWithoutAppConsultationInput], {
    nullable: true
  })
  connectOrCreate?: CaseConsultationAppCreateOrConnectWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppUpsertWithWhereUniqueWithoutAppConsultationInput], {
    nullable: true
  })
  upsert?: CaseConsultationAppUpsertWithWhereUniqueWithoutAppConsultationInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CaseConsultationAppUpdateWithWhereUniqueWithoutAppConsultationInput], {
    nullable: true
  })
  update?: CaseConsultationAppUpdateWithWhereUniqueWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppUpdateManyWithWhereWithoutAppConsultationInput], {
    nullable: true
  })
  updateMany?: CaseConsultationAppUpdateManyWithWhereWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseConsultationAppScalarWhereInput[] | undefined;
}
