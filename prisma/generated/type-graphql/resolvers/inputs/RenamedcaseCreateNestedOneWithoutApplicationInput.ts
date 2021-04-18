import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutApplicationInput } from "../inputs/RenamedcaseCreateOrConnectWithoutApplicationInput";
import { RenamedcaseCreateWithoutApplicationInput } from "../inputs/RenamedcaseCreateWithoutApplicationInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutApplicationInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutApplicationInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutApplicationInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
