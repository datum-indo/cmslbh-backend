import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateOrConnectWithoutApplicationIdInput } from "../inputs/ClientCreateOrConnectWithoutApplicationIdInput";
import { ClientCreateWithoutApplicationIdInput } from "../inputs/ClientCreateWithoutApplicationIdInput";
import { ClientScalarWhereInput } from "../inputs/ClientScalarWhereInput";
import { ClientUpdateManyWithWhereWithoutApplicationIdInput } from "../inputs/ClientUpdateManyWithWhereWithoutApplicationIdInput";
import { ClientUpdateWithWhereUniqueWithoutApplicationIdInput } from "../inputs/ClientUpdateWithWhereUniqueWithoutApplicationIdInput";
import { ClientUpsertWithWhereUniqueWithoutApplicationIdInput } from "../inputs/ClientUpsertWithWhereUniqueWithoutApplicationIdInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateManyWithoutApplicationIdInput {
  @TypeGraphQL.Field(_type => [ClientCreateWithoutApplicationIdInput], {
    nullable: true
  })
  create?: ClientCreateWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientCreateOrConnectWithoutApplicationIdInput], {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientUpsertWithWhereUniqueWithoutApplicationIdInput], {
    nullable: true
  })
  upsert?: ClientUpsertWithWhereUniqueWithoutApplicationIdInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ClientUpdateWithWhereUniqueWithoutApplicationIdInput], {
    nullable: true
  })
  update?: ClientUpdateWithWhereUniqueWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientUpdateManyWithWhereWithoutApplicationIdInput], {
    nullable: true
  })
  updateMany?: ClientUpdateManyWithWhereWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ClientScalarWhereInput[] | undefined;
}
