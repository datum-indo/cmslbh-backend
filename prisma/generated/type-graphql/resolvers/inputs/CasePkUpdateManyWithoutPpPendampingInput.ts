import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkCreateOrConnectWithoutPpPendampingInput } from "../inputs/CasePkCreateOrConnectWithoutPpPendampingInput";
import { CasePkCreateWithoutPpPendampingInput } from "../inputs/CasePkCreateWithoutPpPendampingInput";
import { CasePkScalarWhereInput } from "../inputs/CasePkScalarWhereInput";
import { CasePkUpdateManyWithWhereWithoutPpPendampingInput } from "../inputs/CasePkUpdateManyWithWhereWithoutPpPendampingInput";
import { CasePkUpdateWithWhereUniqueWithoutPpPendampingInput } from "../inputs/CasePkUpdateWithWhereUniqueWithoutPpPendampingInput";
import { CasePkUpsertWithWhereUniqueWithoutPpPendampingInput } from "../inputs/CasePkUpsertWithWhereUniqueWithoutPpPendampingInput";
import { CasePkWhereUniqueInput } from "../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkUpdateManyWithoutPpPendampingInput {
  @TypeGraphQL.Field(_type => [CasePkCreateWithoutPpPendampingInput], {
    nullable: true
  })
  create?: CasePkCreateWithoutPpPendampingInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkCreateOrConnectWithoutPpPendampingInput], {
    nullable: true
  })
  connectOrCreate?: CasePkCreateOrConnectWithoutPpPendampingInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkUpsertWithWhereUniqueWithoutPpPendampingInput], {
    nullable: true
  })
  upsert?: CasePkUpsertWithWhereUniqueWithoutPpPendampingInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkWhereUniqueInput], {
    nullable: true
  })
  connect?: CasePkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkWhereUniqueInput], {
    nullable: true
  })
  set?: CasePkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CasePkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkWhereUniqueInput], {
    nullable: true
  })
  delete?: CasePkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkUpdateWithWhereUniqueWithoutPpPendampingInput], {
    nullable: true
  })
  update?: CasePkUpdateWithWhereUniqueWithoutPpPendampingInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkUpdateManyWithWhereWithoutPpPendampingInput], {
    nullable: true
  })
  updateMany?: CasePkUpdateManyWithWhereWithoutPpPendampingInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CasePkScalarWhereInput[] | undefined;
}
