import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutKorbansInput } from "../inputs/RenamedcaseCreateOrConnectWithoutKorbansInput";
import { RenamedcaseCreateWithoutKorbansInput } from "../inputs/RenamedcaseCreateWithoutKorbansInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutKorbansInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutKorbansInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutKorbansInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutKorbansInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutKorbansInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
