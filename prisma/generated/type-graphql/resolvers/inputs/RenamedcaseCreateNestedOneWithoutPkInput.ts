import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutPkInput } from "../inputs/RenamedcaseCreateOrConnectWithoutPkInput";
import { RenamedcaseCreateWithoutPkInput } from "../inputs/RenamedcaseCreateWithoutPkInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutPkInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutPkInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutPkInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutPkInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutPkInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
