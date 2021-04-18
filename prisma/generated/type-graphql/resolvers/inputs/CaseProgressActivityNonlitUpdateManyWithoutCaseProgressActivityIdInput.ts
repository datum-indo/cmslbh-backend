import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitScalarWhereInput } from "../inputs/CaseProgressActivityNonlitScalarWhereInput";
import { CaseProgressActivityNonlitUpdateManyWithWhereWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitUpdateManyWithWhereWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitWhereUniqueInput } from "../inputs/CaseProgressActivityNonlitWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput {
  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  create?: CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  upsert?: CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseProgressActivityNonlitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitWhereUniqueInput], {
    nullable: true
  })
  set?: CaseProgressActivityNonlitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseProgressActivityNonlitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseProgressActivityNonlitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  update?: CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitUpdateManyWithWhereWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  updateMany?: CaseProgressActivityNonlitUpdateManyWithWhereWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseProgressActivityNonlitScalarWhereInput[] | undefined;
}
