import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutCasePelakuInput } from "../inputs/PersonCreateOrConnectWithoutCasePelakuInput";
import { PersonCreateWithoutCasePelakuInput } from "../inputs/PersonCreateWithoutCasePelakuInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateNestedOneWithoutCasePelakuInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutCasePelakuInput, {
    nullable: true
  })
  create?: PersonCreateWithoutCasePelakuInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutCasePelakuInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutCasePelakuInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
