import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutTransferreferralsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutTransferreferralsInput";
import { RenamedcaseCreateWithoutTransferreferralsInput } from "../inputs/RenamedcaseCreateWithoutTransferreferralsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutTransferreferralsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutTransferreferralsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutTransferreferralsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutTransferreferralsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutTransferreferralsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
