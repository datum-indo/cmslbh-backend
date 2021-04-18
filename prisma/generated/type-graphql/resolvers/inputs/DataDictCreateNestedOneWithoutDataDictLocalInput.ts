import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictCreateOrConnectWithoutDataDictLocalInput } from "../inputs/DataDictCreateOrConnectWithoutDataDictLocalInput";
import { DataDictCreateWithoutDataDictLocalInput } from "../inputs/DataDictCreateWithoutDataDictLocalInput";
import { DataDictWhereUniqueInput } from "../inputs/DataDictWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictCreateNestedOneWithoutDataDictLocalInput {
  @TypeGraphQL.Field(_type => DataDictCreateWithoutDataDictLocalInput, {
    nullable: true
  })
  create?: DataDictCreateWithoutDataDictLocalInput | undefined;

  @TypeGraphQL.Field(_type => DataDictCreateOrConnectWithoutDataDictLocalInput, {
    nullable: true
  })
  connectOrCreate?: DataDictCreateOrConnectWithoutDataDictLocalInput | undefined;

  @TypeGraphQL.Field(_type => DataDictWhereUniqueInput, {
    nullable: true
  })
  connect?: DataDictWhereUniqueInput | undefined;
}
