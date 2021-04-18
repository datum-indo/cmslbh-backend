import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateOrConnectWithoutLogRequestInput } from "../inputs/ClientCreateOrConnectWithoutLogRequestInput";
import { ClientCreateWithoutLogRequestInput } from "../inputs/ClientCreateWithoutLogRequestInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateNestedManyWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => [ClientCreateWithoutLogRequestInput], {
    nullable: true
  })
  create?: ClientCreateWithoutLogRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientCreateOrConnectWithoutLogRequestInput], {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutLogRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereUniqueInput], {
    nullable: true
  })
  connect?: ClientWhereUniqueInput[] | undefined;
}
