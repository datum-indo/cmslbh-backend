import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferCreateOrConnectWithoutNetworkInput } from "../inputs/CaseTransferCreateOrConnectWithoutNetworkInput";
import { CaseTransferCreateWithoutNetworkInput } from "../inputs/CaseTransferCreateWithoutNetworkInput";
import { CaseTransferWhereUniqueInput } from "../inputs/CaseTransferWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferCreateNestedManyWithoutNetworkInput {
  @TypeGraphQL.Field(_type => [CaseTransferCreateWithoutNetworkInput], {
    nullable: true
  })
  create?: CaseTransferCreateWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferCreateOrConnectWithoutNetworkInput], {
    nullable: true
  })
  connectOrCreate?: CaseTransferCreateOrConnectWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseTransferWhereUniqueInput[] | undefined;
}
