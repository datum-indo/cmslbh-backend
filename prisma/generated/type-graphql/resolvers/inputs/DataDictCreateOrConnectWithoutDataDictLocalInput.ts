import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictCreateWithoutDataDictLocalInput } from "../inputs/DataDictCreateWithoutDataDictLocalInput";
import { DataDictWhereUniqueInput } from "../inputs/DataDictWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictCreateOrConnectWithoutDataDictLocalInput {
  @TypeGraphQL.Field(_type => DataDictWhereUniqueInput, {
    nullable: false
  })
  where!: DataDictWhereUniqueInput;

  @TypeGraphQL.Field(_type => DataDictCreateWithoutDataDictLocalInput, {
    nullable: false
  })
  create!: DataDictCreateWithoutDataDictLocalInput;
}
