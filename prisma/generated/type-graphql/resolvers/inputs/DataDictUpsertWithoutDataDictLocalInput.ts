import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictCreateWithoutDataDictLocalInput } from "../inputs/DataDictCreateWithoutDataDictLocalInput";
import { DataDictUpdateWithoutDataDictLocalInput } from "../inputs/DataDictUpdateWithoutDataDictLocalInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictUpsertWithoutDataDictLocalInput {
  @TypeGraphQL.Field(_type => DataDictUpdateWithoutDataDictLocalInput, {
    nullable: false
  })
  update!: DataDictUpdateWithoutDataDictLocalInput;

  @TypeGraphQL.Field(_type => DataDictCreateWithoutDataDictLocalInput, {
    nullable: false
  })
  create!: DataDictCreateWithoutDataDictLocalInput;
}
