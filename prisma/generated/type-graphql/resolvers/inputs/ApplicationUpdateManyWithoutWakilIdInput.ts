import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutWakilIdInput } from "../inputs/ApplicationCreateOrConnectWithoutWakilIdInput";
import { ApplicationCreateWithoutWakilIdInput } from "../inputs/ApplicationCreateWithoutWakilIdInput";
import { ApplicationScalarWhereInput } from "../inputs/ApplicationScalarWhereInput";
import { ApplicationUpdateManyWithWhereWithoutWakilIdInput } from "../inputs/ApplicationUpdateManyWithWhereWithoutWakilIdInput";
import { ApplicationUpdateWithWhereUniqueWithoutWakilIdInput } from "../inputs/ApplicationUpdateWithWhereUniqueWithoutWakilIdInput";
import { ApplicationUpsertWithWhereUniqueWithoutWakilIdInput } from "../inputs/ApplicationUpsertWithWhereUniqueWithoutWakilIdInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationUpdateManyWithoutWakilIdInput {
  @TypeGraphQL.Field(_type => [ApplicationCreateWithoutWakilIdInput], {
    nullable: true
  })
  create?: ApplicationCreateWithoutWakilIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationCreateOrConnectWithoutWakilIdInput], {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutWakilIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpsertWithWhereUniqueWithoutWakilIdInput], {
    nullable: true
  })
  upsert?: ApplicationUpsertWithWhereUniqueWithoutWakilIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  set?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  delete?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpdateWithWhereUniqueWithoutWakilIdInput], {
    nullable: true
  })
  update?: ApplicationUpdateWithWhereUniqueWithoutWakilIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpdateManyWithWhereWithoutWakilIdInput], {
    nullable: true
  })
  updateMany?: ApplicationUpdateManyWithWhereWithoutWakilIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ApplicationScalarWhereInput[] | undefined;
}
