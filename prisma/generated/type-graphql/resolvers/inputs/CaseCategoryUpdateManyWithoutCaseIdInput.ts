import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseCategoryCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseCategoryCreateOrConnectWithoutCaseIdInput";
import { CaseCategoryCreateWithoutCaseIdInput } from "../inputs/CaseCategoryCreateWithoutCaseIdInput";
import { CaseCategoryScalarWhereInput } from "../inputs/CaseCategoryScalarWhereInput";
import { CaseCategoryUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseCategoryUpdateManyWithWhereWithoutCaseIdInput";
import { CaseCategoryUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseCategoryUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseCategoryUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseCategoryUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseCategoryWhereUniqueInput } from "../inputs/CaseCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseCategoryUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseCategoryCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseCategoryCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseCategoryCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseCategoryUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryWhereUniqueInput], {
    nullable: true
  })
  set?: CaseCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseCategoryUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseCategoryUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseCategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseCategoryScalarWhereInput[] | undefined;
}
