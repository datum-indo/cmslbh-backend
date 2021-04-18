import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateOrConnectWithoutUserInput } from "../inputs/RoleCreateOrConnectWithoutUserInput";
import { RoleCreateWithoutUserInput } from "../inputs/RoleCreateWithoutUserInput";
import { RoleScalarWhereInput } from "../inputs/RoleScalarWhereInput";
import { RoleUpdateManyWithWhereWithoutUserInput } from "../inputs/RoleUpdateManyWithWhereWithoutUserInput";
import { RoleUpdateWithWhereUniqueWithoutUserInput } from "../inputs/RoleUpdateWithWhereUniqueWithoutUserInput";
import { RoleUpsertWithWhereUniqueWithoutUserInput } from "../inputs/RoleUpsertWithWhereUniqueWithoutUserInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [RoleCreateWithoutUserInput], {
    nullable: true
  })
  create?: RoleCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RoleCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: RoleUpsertWithWhereUniqueWithoutUserInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [RoleUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: RoleUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: RoleUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RoleScalarWhereInput[] | undefined;
}
