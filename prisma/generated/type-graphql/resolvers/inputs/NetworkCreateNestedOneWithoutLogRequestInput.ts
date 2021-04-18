import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateOrConnectWithoutLogRequestInput } from "../inputs/NetworkCreateOrConnectWithoutLogRequestInput";
import { NetworkCreateWithoutLogRequestInput } from "../inputs/NetworkCreateWithoutLogRequestInput";
import { NetworkWhereUniqueInput } from "../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkCreateNestedOneWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => NetworkCreateWithoutLogRequestInput, {
    nullable: true
  })
  create?: NetworkCreateWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => NetworkCreateOrConnectWithoutLogRequestInput, {
    nullable: true
  })
  connectOrCreate?: NetworkCreateOrConnectWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: true
  })
  connect?: NetworkWhereUniqueInput | undefined;
}
