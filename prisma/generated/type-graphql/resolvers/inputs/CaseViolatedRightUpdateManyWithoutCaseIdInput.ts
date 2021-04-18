import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolatedRightCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseViolatedRightCreateOrConnectWithoutCaseIdInput";
import { CaseViolatedRightCreateWithoutCaseIdInput } from "../inputs/CaseViolatedRightCreateWithoutCaseIdInput";
import { CaseViolatedRightScalarWhereInput } from "../inputs/CaseViolatedRightScalarWhereInput";
import { CaseViolatedRightUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseViolatedRightUpdateManyWithWhereWithoutCaseIdInput";
import { CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseViolatedRightWhereUniqueInput } from "../inputs/CaseViolatedRightWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolatedRightUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseViolatedRightCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseViolatedRightCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseViolatedRightCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseViolatedRightWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightWhereUniqueInput], {
    nullable: true
  })
  set?: CaseViolatedRightWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseViolatedRightWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseViolatedRightWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseViolatedRightUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseViolatedRightScalarWhereInput[] | undefined;
}
