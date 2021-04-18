import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictCreateNestedOneWithoutDataDictLocalInput } from "../inputs/DataDictCreateNestedOneWithoutDataDictLocalInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictLocalCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lang?: string | undefined;

  @TypeGraphQL.Field(_type => DataDictCreateNestedOneWithoutDataDictLocalInput, {
    nullable: true
  })
  DataDict?: DataDictCreateNestedOneWithoutDataDictLocalInput | undefined;
}
