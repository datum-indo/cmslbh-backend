import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateOrConnectWithoutCaseTransferInput } from "../inputs/NetworkCreateOrConnectWithoutCaseTransferInput";
import { NetworkCreateWithoutCaseTransferInput } from "../inputs/NetworkCreateWithoutCaseTransferInput";
import { NetworkWhereUniqueInput } from "../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkCreateNestedOneWithoutCaseTransferInput {
  @TypeGraphQL.Field(_type => NetworkCreateWithoutCaseTransferInput, {
    nullable: true
  })
  create?: NetworkCreateWithoutCaseTransferInput | undefined;

  @TypeGraphQL.Field(_type => NetworkCreateOrConnectWithoutCaseTransferInput, {
    nullable: true
  })
  connectOrCreate?: NetworkCreateOrConnectWithoutCaseTransferInput | undefined;

  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: true
  })
  connect?: NetworkWhereUniqueInput | undefined;
}
