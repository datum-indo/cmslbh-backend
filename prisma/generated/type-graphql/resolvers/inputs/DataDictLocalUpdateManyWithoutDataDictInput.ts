import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictLocalCreateOrConnectWithoutDataDictInput } from "../inputs/DataDictLocalCreateOrConnectWithoutDataDictInput";
import { DataDictLocalCreateWithoutDataDictInput } from "../inputs/DataDictLocalCreateWithoutDataDictInput";
import { DataDictLocalScalarWhereInput } from "../inputs/DataDictLocalScalarWhereInput";
import { DataDictLocalUpdateManyWithWhereWithoutDataDictInput } from "../inputs/DataDictLocalUpdateManyWithWhereWithoutDataDictInput";
import { DataDictLocalUpdateWithWhereUniqueWithoutDataDictInput } from "../inputs/DataDictLocalUpdateWithWhereUniqueWithoutDataDictInput";
import { DataDictLocalUpsertWithWhereUniqueWithoutDataDictInput } from "../inputs/DataDictLocalUpsertWithWhereUniqueWithoutDataDictInput";
import { DataDictLocalWhereUniqueInput } from "../inputs/DataDictLocalWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictLocalUpdateManyWithoutDataDictInput {
  @TypeGraphQL.Field(_type => [DataDictLocalCreateWithoutDataDictInput], {
    nullable: true
  })
  create?: DataDictLocalCreateWithoutDataDictInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalCreateOrConnectWithoutDataDictInput], {
    nullable: true
  })
  connectOrCreate?: DataDictLocalCreateOrConnectWithoutDataDictInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalUpsertWithWhereUniqueWithoutDataDictInput], {
    nullable: true
  })
  upsert?: DataDictLocalUpsertWithWhereUniqueWithoutDataDictInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalWhereUniqueInput], {
    nullable: true
  })
  connect?: DataDictLocalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalWhereUniqueInput], {
    nullable: true
  })
  set?: DataDictLocalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DataDictLocalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalWhereUniqueInput], {
    nullable: true
  })
  delete?: DataDictLocalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalUpdateWithWhereUniqueWithoutDataDictInput], {
    nullable: true
  })
  update?: DataDictLocalUpdateWithWhereUniqueWithoutDataDictInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalUpdateManyWithWhereWithoutDataDictInput], {
    nullable: true
  })
  updateMany?: DataDictLocalUpdateManyWithWhereWithoutDataDictInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DataDictLocalScalarWhereInput[] | undefined;
}
