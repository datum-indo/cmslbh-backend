import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateOrConnectWithoutPersonIdInput } from "../inputs/ClientCreateOrConnectWithoutPersonIdInput";
import { ClientCreateWithoutPersonIdInput } from "../inputs/ClientCreateWithoutPersonIdInput";
import { ClientScalarWhereInput } from "../inputs/ClientScalarWhereInput";
import { ClientUpdateManyWithWhereWithoutPersonIdInput } from "../inputs/ClientUpdateManyWithWhereWithoutPersonIdInput";
import { ClientUpdateWithWhereUniqueWithoutPersonIdInput } from "../inputs/ClientUpdateWithWhereUniqueWithoutPersonIdInput";
import { ClientUpsertWithWhereUniqueWithoutPersonIdInput } from "../inputs/ClientUpsertWithWhereUniqueWithoutPersonIdInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateManyWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => [ClientCreateWithoutPersonIdInput], {
    nullable: true
  })
  create?: ClientCreateWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientCreateOrConnectWithoutPersonIdInput], {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientUpsertWithWhereUniqueWithoutPersonIdInput], {
    nullable: true
  })
  upsert?: ClientUpsertWithWhereUniqueWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereUniqueInput], {
    nullable: true
  })
  connect?: ClientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereUniqueInput], {
    nullable: true
  })
  set?: ClientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ClientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereUniqueInput], {
    nullable: true
  })
  delete?: ClientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientUpdateWithWhereUniqueWithoutPersonIdInput], {
    nullable: true
  })
  update?: ClientUpdateWithWhereUniqueWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientUpdateManyWithWhereWithoutPersonIdInput], {
    nullable: true
  })
  updateMany?: ClientUpdateManyWithWhereWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ClientScalarWhereInput[] | undefined;
}
