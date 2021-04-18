import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateWithoutCaseTransferInput } from "../inputs/NetworkCreateWithoutCaseTransferInput";
import { NetworkUpdateWithoutCaseTransferInput } from "../inputs/NetworkUpdateWithoutCaseTransferInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkUpsertWithoutCaseTransferInput {
  @TypeGraphQL.Field(_type => NetworkUpdateWithoutCaseTransferInput, {
    nullable: false
  })
  update!: NetworkUpdateWithoutCaseTransferInput;

  @TypeGraphQL.Field(_type => NetworkCreateWithoutCaseTransferInput, {
    nullable: false
  })
  create!: NetworkCreateWithoutCaseTransferInput;
}
