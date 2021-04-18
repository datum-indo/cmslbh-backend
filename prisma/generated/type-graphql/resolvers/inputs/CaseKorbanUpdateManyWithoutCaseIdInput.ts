import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseKorbanCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseKorbanCreateOrConnectWithoutCaseIdInput";
import { CaseKorbanCreateWithoutCaseIdInput } from "../inputs/CaseKorbanCreateWithoutCaseIdInput";
import { CaseKorbanScalarWhereInput } from "../inputs/CaseKorbanScalarWhereInput";
import { CaseKorbanUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseKorbanUpdateManyWithWhereWithoutCaseIdInput";
import { CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseKorbanWhereUniqueInput } from "../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseKorbanCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseKorbanCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseKorbanCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseKorbanWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanWhereUniqueInput], {
    nullable: true
  })
  set?: CaseKorbanWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseKorbanWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseKorbanWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseKorbanUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseKorbanScalarWhereInput[] | undefined;
}
