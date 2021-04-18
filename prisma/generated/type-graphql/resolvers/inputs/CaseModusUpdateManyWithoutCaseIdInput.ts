import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseModusCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseModusCreateOrConnectWithoutCaseIdInput";
import { CaseModusCreateWithoutCaseIdInput } from "../inputs/CaseModusCreateWithoutCaseIdInput";
import { CaseModusScalarWhereInput } from "../inputs/CaseModusScalarWhereInput";
import { CaseModusUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseModusUpdateManyWithWhereWithoutCaseIdInput";
import { CaseModusUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseModusUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseModusUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseModusUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseModusWhereUniqueInput } from "../inputs/CaseModusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseModusUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseModusCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseModusCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseModusCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseModusUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseModusWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusWhereUniqueInput], {
    nullable: true
  })
  set?: CaseModusWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseModusWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseModusWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseModusUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseModusUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseModusScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseModusScalarWhereInput[] | undefined;
}
