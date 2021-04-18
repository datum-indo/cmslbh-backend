import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutClientsInput } from "../inputs/PersonCreateOrConnectWithoutClientsInput";
import { PersonCreateWithoutClientsInput } from "../inputs/PersonCreateWithoutClientsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateNestedOneWithoutClientsInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutClientsInput, {
    nullable: true
  })
  create?: PersonCreateWithoutClientsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutClientsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutClientsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
