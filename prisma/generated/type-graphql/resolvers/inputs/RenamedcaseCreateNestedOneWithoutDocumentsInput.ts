import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutDocumentsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutDocumentsInput";
import { RenamedcaseCreateWithoutDocumentsInput } from "../inputs/RenamedcaseCreateWithoutDocumentsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutDocumentsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutDocumentsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutDocumentsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutDocumentsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutDocumentsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
