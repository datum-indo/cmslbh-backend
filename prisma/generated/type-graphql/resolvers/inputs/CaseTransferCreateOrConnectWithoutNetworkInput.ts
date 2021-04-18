import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferCreateWithoutNetworkInput } from "../inputs/CaseTransferCreateWithoutNetworkInput";
import { CaseTransferWhereUniqueInput } from "../inputs/CaseTransferWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferCreateOrConnectWithoutNetworkInput {
  @TypeGraphQL.Field(_type => CaseTransferWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseTransferCreateWithoutNetworkInput, {
    nullable: false
  })
  create!: CaseTransferCreateWithoutNetworkInput;
}
