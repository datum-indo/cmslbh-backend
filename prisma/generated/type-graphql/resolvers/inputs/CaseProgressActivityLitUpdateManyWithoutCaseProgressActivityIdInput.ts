import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityLitScalarWhereInput } from "../inputs/CaseProgressActivityLitScalarWhereInput";
import { CaseProgressActivityLitUpdateManyWithWhereWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityLitUpdateManyWithWhereWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityLitWhereUniqueInput } from "../inputs/CaseProgressActivityLitWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput {
  @TypeGraphQL.Field(_type => [CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  create?: CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  upsert?: CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseProgressActivityLitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitWhereUniqueInput], {
    nullable: true
  })
  set?: CaseProgressActivityLitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseProgressActivityLitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseProgressActivityLitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  update?: CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitUpdateManyWithWhereWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  updateMany?: CaseProgressActivityLitUpdateManyWithWhereWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseProgressActivityLitScalarWhereInput[] | undefined;
}
