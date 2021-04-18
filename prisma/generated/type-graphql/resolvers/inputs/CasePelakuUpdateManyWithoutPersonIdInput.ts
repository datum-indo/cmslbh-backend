import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuCreateOrConnectWithoutPersonIdInput } from "../inputs/CasePelakuCreateOrConnectWithoutPersonIdInput";
import { CasePelakuCreateWithoutPersonIdInput } from "../inputs/CasePelakuCreateWithoutPersonIdInput";
import { CasePelakuScalarWhereInput } from "../inputs/CasePelakuScalarWhereInput";
import { CasePelakuUpdateManyWithWhereWithoutPersonIdInput } from "../inputs/CasePelakuUpdateManyWithWhereWithoutPersonIdInput";
import { CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput } from "../inputs/CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput";
import { CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput } from "../inputs/CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput";
import { CasePelakuWhereUniqueInput } from "../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuUpdateManyWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => [CasePelakuCreateWithoutPersonIdInput], {
    nullable: true
  })
  create?: CasePelakuCreateWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuCreateOrConnectWithoutPersonIdInput], {
    nullable: true
  })
  connectOrCreate?: CasePelakuCreateOrConnectWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput], {
    nullable: true
  })
  upsert?: CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput], {
    nullable: true
  })
  update?: CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuUpdateManyWithWhereWithoutPersonIdInput], {
    nullable: true
  })
  updateMany?: CasePelakuUpdateManyWithWhereWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CasePelakuScalarWhereInput[] | undefined;
}
