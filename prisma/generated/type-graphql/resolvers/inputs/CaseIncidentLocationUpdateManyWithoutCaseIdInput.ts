import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIncidentLocationCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseIncidentLocationCreateOrConnectWithoutCaseIdInput";
import { CaseIncidentLocationCreateWithoutCaseIdInput } from "../inputs/CaseIncidentLocationCreateWithoutCaseIdInput";
import { CaseIncidentLocationScalarWhereInput } from "../inputs/CaseIncidentLocationScalarWhereInput";
import { CaseIncidentLocationUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseIncidentLocationUpdateManyWithWhereWithoutCaseIdInput";
import { CaseIncidentLocationUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseIncidentLocationUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseIncidentLocationUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseIncidentLocationUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseIncidentLocationWhereUniqueInput } from "../inputs/CaseIncidentLocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIncidentLocationUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseIncidentLocationCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseIncidentLocationCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseIncidentLocationCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseIncidentLocationUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseIncidentLocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationWhereUniqueInput], {
    nullable: true
  })
  set?: CaseIncidentLocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseIncidentLocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseIncidentLocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseIncidentLocationUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseIncidentLocationUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseIncidentLocationScalarWhereInput[] | undefined;
}
