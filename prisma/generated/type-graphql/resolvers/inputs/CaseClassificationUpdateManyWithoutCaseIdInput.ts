import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseClassificationCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseClassificationCreateOrConnectWithoutCaseIdInput";
import { CaseClassificationCreateWithoutCaseIdInput } from "../inputs/CaseClassificationCreateWithoutCaseIdInput";
import { CaseClassificationScalarWhereInput } from "../inputs/CaseClassificationScalarWhereInput";
import { CaseClassificationUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseClassificationUpdateManyWithWhereWithoutCaseIdInput";
import { CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseClassificationWhereUniqueInput } from "../inputs/CaseClassificationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseClassificationUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseClassificationCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseClassificationCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseClassificationCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseClassificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationWhereUniqueInput], {
    nullable: true
  })
  set?: CaseClassificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseClassificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseClassificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseClassificationUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseClassificationScalarWhereInput[] | undefined;
}
