import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateOrConnectWithoutTypeInput } from "../inputs/RoleCreateOrConnectWithoutTypeInput";
import { RoleCreateWithoutTypeInput } from "../inputs/RoleCreateWithoutTypeInput";
import { RoleScalarWhereInput } from "../inputs/RoleScalarWhereInput";
import { RoleUpdateManyWithWhereWithoutTypeInput } from "../inputs/RoleUpdateManyWithWhereWithoutTypeInput";
import { RoleUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/RoleUpdateWithWhereUniqueWithoutTypeInput";
import { RoleUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/RoleUpsertWithWhereUniqueWithoutTypeInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleUpdateManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [RoleCreateWithoutTypeInput], {
    nullable: true
  })
  create?: RoleCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: RoleCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: RoleUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereUniqueInput], {
    nullable: true
  })
  connect?: RoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereUniqueInput], {
    nullable: true
  })
  set?: RoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereUniqueInput], {
    nullable: true
  })
  delete?: RoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: RoleUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: RoleUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RoleScalarWhereInput[] | undefined;
}
