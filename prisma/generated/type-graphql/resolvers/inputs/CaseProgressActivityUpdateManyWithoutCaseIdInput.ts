import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseProgressActivityCreateOrConnectWithoutCaseIdInput";
import { CaseProgressActivityCreateWithoutCaseIdInput } from "../inputs/CaseProgressActivityCreateWithoutCaseIdInput";
import { CaseProgressActivityScalarWhereInput } from "../inputs/CaseProgressActivityScalarWhereInput";
import { CaseProgressActivityUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseProgressActivityUpdateManyWithWhereWithoutCaseIdInput";
import { CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseProgressActivityWhereUniqueInput } from "../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseProgressActivityCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseProgressActivityCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseProgressActivityCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseProgressActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityWhereUniqueInput], {
    nullable: true
  })
  set?: CaseProgressActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseProgressActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseProgressActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseProgressActivityUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseProgressActivityScalarWhereInput[] | undefined;
}
