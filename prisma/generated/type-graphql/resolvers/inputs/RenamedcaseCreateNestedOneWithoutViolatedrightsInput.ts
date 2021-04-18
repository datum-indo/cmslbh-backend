import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutViolatedrightsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutViolatedrightsInput";
import { RenamedcaseCreateWithoutViolatedrightsInput } from "../inputs/RenamedcaseCreateWithoutViolatedrightsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutViolatedrightsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutViolatedrightsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutViolatedrightsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutViolatedrightsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutViolatedrightsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
