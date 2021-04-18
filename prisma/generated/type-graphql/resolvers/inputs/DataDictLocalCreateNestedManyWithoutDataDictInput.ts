import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictLocalCreateOrConnectWithoutDataDictInput } from "../inputs/DataDictLocalCreateOrConnectWithoutDataDictInput";
import { DataDictLocalCreateWithoutDataDictInput } from "../inputs/DataDictLocalCreateWithoutDataDictInput";
import { DataDictLocalWhereUniqueInput } from "../inputs/DataDictLocalWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictLocalCreateNestedManyWithoutDataDictInput {
  @TypeGraphQL.Field(_type => [DataDictLocalCreateWithoutDataDictInput], {
    nullable: true
  })
  create?: DataDictLocalCreateWithoutDataDictInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalCreateOrConnectWithoutDataDictInput], {
    nullable: true
  })
  connectOrCreate?: DataDictLocalCreateOrConnectWithoutDataDictInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalWhereUniqueInput], {
    nullable: true
  })
  connect?: DataDictLocalWhereUniqueInput[] | undefined;
}
