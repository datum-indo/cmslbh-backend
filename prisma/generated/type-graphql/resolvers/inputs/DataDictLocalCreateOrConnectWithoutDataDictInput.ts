import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictLocalCreateWithoutDataDictInput } from "../inputs/DataDictLocalCreateWithoutDataDictInput";
import { DataDictLocalWhereUniqueInput } from "../inputs/DataDictLocalWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictLocalCreateOrConnectWithoutDataDictInput {
  @TypeGraphQL.Field(_type => DataDictLocalWhereUniqueInput, {
    nullable: false
  })
  where!: DataDictLocalWhereUniqueInput;

  @TypeGraphQL.Field(_type => DataDictLocalCreateWithoutDataDictInput, {
    nullable: false
  })
  create!: DataDictLocalCreateWithoutDataDictInput;
}
