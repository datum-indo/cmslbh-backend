import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuCreateOrConnectWithoutCaseIdInput } from "../inputs/CasePelakuCreateOrConnectWithoutCaseIdInput";
import { CasePelakuCreateWithoutCaseIdInput } from "../inputs/CasePelakuCreateWithoutCaseIdInput";
import { CasePelakuScalarWhereInput } from "../inputs/CasePelakuScalarWhereInput";
import { CasePelakuUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CasePelakuUpdateManyWithWhereWithoutCaseIdInput";
import { CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput";
import { CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput";
import { CasePelakuWhereUniqueInput } from "../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CasePelakuCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CasePelakuCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CasePelakuCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuWhereUniqueInput], {
    nullable: true
  })
  connect?: CasePelakuWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuWhereUniqueInput], {
    nullable: true
  })
  set?: CasePelakuWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CasePelakuWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuWhereUniqueInput], {
    nullable: true
  })
  delete?: CasePelakuWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CasePelakuUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CasePelakuScalarWhereInput[] | undefined;
}
