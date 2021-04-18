import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateOrConnectWithoutLogRequestInput } from "../inputs/ClientCreateOrConnectWithoutLogRequestInput";
import { ClientCreateWithoutLogRequestInput } from "../inputs/ClientCreateWithoutLogRequestInput";
import { ClientScalarWhereInput } from "../inputs/ClientScalarWhereInput";
import { ClientUpdateManyWithWhereWithoutLogRequestInput } from "../inputs/ClientUpdateManyWithWhereWithoutLogRequestInput";
import { ClientUpdateWithWhereUniqueWithoutLogRequestInput } from "../inputs/ClientUpdateWithWhereUniqueWithoutLogRequestInput";
import { ClientUpsertWithWhereUniqueWithoutLogRequestInput } from "../inputs/ClientUpsertWithWhereUniqueWithoutLogRequestInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateManyWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => [ClientCreateWithoutLogRequestInput], {
    nullable: true
  })
  create?: ClientCreateWithoutLogRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientCreateOrConnectWithoutLogRequestInput], {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutLogRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientUpsertWithWhereUniqueWithoutLogRequestInput], {
    nullable: true
  })
  upsert?: ClientUpsertWithWhereUniqueWithoutLogRequestInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ClientUpdateWithWhereUniqueWithoutLogRequestInput], {
    nullable: true
  })
  update?: ClientUpdateWithWhereUniqueWithoutLogRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientUpdateManyWithWhereWithoutLogRequestInput], {
    nullable: true
  })
  updateMany?: ClientUpdateManyWithWhereWithoutLogRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ClientScalarWhereInput[] | undefined;
}
