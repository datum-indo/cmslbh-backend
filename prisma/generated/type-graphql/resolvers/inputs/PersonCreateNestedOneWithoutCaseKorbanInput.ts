import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutCaseKorbanInput } from "../inputs/PersonCreateOrConnectWithoutCaseKorbanInput";
import { PersonCreateWithoutCaseKorbanInput } from "../inputs/PersonCreateWithoutCaseKorbanInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateNestedOneWithoutCaseKorbanInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutCaseKorbanInput, {
    nullable: true
  })
  create?: PersonCreateWithoutCaseKorbanInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutCaseKorbanInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutCaseKorbanInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
