import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutModusesInput } from "../inputs/RenamedcaseCreateOrConnectWithoutModusesInput";
import { RenamedcaseCreateWithoutModusesInput } from "../inputs/RenamedcaseCreateWithoutModusesInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutModusesInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutModusesInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutModusesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutModusesInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutModusesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
