import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseKorbanCreateOrConnectWithoutPersonIdInput } from "../inputs/CaseKorbanCreateOrConnectWithoutPersonIdInput";
import { CaseKorbanCreateWithoutPersonIdInput } from "../inputs/CaseKorbanCreateWithoutPersonIdInput";
import { CaseKorbanScalarWhereInput } from "../inputs/CaseKorbanScalarWhereInput";
import { CaseKorbanUpdateManyWithWhereWithoutPersonIdInput } from "../inputs/CaseKorbanUpdateManyWithWhereWithoutPersonIdInput";
import { CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput } from "../inputs/CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput";
import { CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput } from "../inputs/CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput";
import { CaseKorbanWhereUniqueInput } from "../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanUpdateManyWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => [CaseKorbanCreateWithoutPersonIdInput], {
    nullable: true
  })
  create?: CaseKorbanCreateWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanCreateOrConnectWithoutPersonIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseKorbanCreateOrConnectWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput], {
    nullable: true
  })
  upsert?: CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput], {
    nullable: true
  })
  update?: CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanUpdateManyWithWhereWithoutPersonIdInput], {
    nullable: true
  })
  updateMany?: CaseKorbanUpdateManyWithWhereWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseKorbanScalarWhereInput[] | undefined;
}
