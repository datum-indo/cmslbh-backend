import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAppCreateOrConnectWithoutAppConsultationInput } from "../inputs/LogRequestAppCreateOrConnectWithoutAppConsultationInput";
import { LogRequestAppCreateWithoutAppConsultationInput } from "../inputs/LogRequestAppCreateWithoutAppConsultationInput";
import { LogRequestAppScalarWhereInput } from "../inputs/LogRequestAppScalarWhereInput";
import { LogRequestAppUpdateManyWithWhereWithoutAppConsultationInput } from "../inputs/LogRequestAppUpdateManyWithWhereWithoutAppConsultationInput";
import { LogRequestAppUpdateWithWhereUniqueWithoutAppConsultationInput } from "../inputs/LogRequestAppUpdateWithWhereUniqueWithoutAppConsultationInput";
import { LogRequestAppUpsertWithWhereUniqueWithoutAppConsultationInput } from "../inputs/LogRequestAppUpsertWithWhereUniqueWithoutAppConsultationInput";
import { LogRequestAppWhereUniqueInput } from "../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppUpdateManyWithoutAppConsultationInput {
  @TypeGraphQL.Field(_type => [LogRequestAppCreateWithoutAppConsultationInput], {
    nullable: true
  })
  create?: LogRequestAppCreateWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppCreateOrConnectWithoutAppConsultationInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestAppCreateOrConnectWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppUpsertWithWhereUniqueWithoutAppConsultationInput], {
    nullable: true
  })
  upsert?: LogRequestAppUpsertWithWhereUniqueWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereUniqueInput], {
    nullable: true
  })
  set?: LogRequestAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LogRequestAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereUniqueInput], {
    nullable: true
  })
  delete?: LogRequestAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppUpdateWithWhereUniqueWithoutAppConsultationInput], {
    nullable: true
  })
  update?: LogRequestAppUpdateWithWhereUniqueWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppUpdateManyWithWhereWithoutAppConsultationInput], {
    nullable: true
  })
  updateMany?: LogRequestAppUpdateManyWithWhereWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LogRequestAppScalarWhereInput[] | undefined;
}
