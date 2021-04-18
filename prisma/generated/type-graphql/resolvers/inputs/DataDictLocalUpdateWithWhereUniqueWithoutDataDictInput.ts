import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictLocalUpdateWithoutDataDictInput } from "../inputs/DataDictLocalUpdateWithoutDataDictInput";
import { DataDictLocalWhereUniqueInput } from "../inputs/DataDictLocalWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictLocalUpdateWithWhereUniqueWithoutDataDictInput {
  @TypeGraphQL.Field(_type => DataDictLocalWhereUniqueInput, {
    nullable: false
  })
  where!: DataDictLocalWhereUniqueInput;

  @TypeGraphQL.Field(_type => DataDictLocalUpdateWithoutDataDictInput, {
    nullable: false
  })
  data!: DataDictLocalUpdateWithoutDataDictInput;
}
