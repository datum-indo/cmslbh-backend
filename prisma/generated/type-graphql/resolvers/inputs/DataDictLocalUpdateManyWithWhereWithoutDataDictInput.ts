import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictLocalScalarWhereInput } from "../inputs/DataDictLocalScalarWhereInput";
import { DataDictLocalUpdateManyMutationInput } from "../inputs/DataDictLocalUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictLocalUpdateManyWithWhereWithoutDataDictInput {
  @TypeGraphQL.Field(_type => DataDictLocalScalarWhereInput, {
    nullable: false
  })
  where!: DataDictLocalScalarWhereInput;

  @TypeGraphQL.Field(_type => DataDictLocalUpdateManyMutationInput, {
    nullable: false
  })
  data!: DataDictLocalUpdateManyMutationInput;
}
