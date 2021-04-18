import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateWithoutCaseTransferInput } from "../inputs/NetworkCreateWithoutCaseTransferInput";
import { NetworkWhereUniqueInput } from "../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkCreateOrConnectWithoutCaseTransferInput {
  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: false
  })
  where!: NetworkWhereUniqueInput;

  @TypeGraphQL.Field(_type => NetworkCreateWithoutCaseTransferInput, {
    nullable: false
  })
  create!: NetworkCreateWithoutCaseTransferInput;
}
