import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateOrConnectWithoutCaseTransferInput } from "../inputs/NetworkCreateOrConnectWithoutCaseTransferInput";
import { NetworkCreateWithoutCaseTransferInput } from "../inputs/NetworkCreateWithoutCaseTransferInput";
import { NetworkUpdateWithoutCaseTransferInput } from "../inputs/NetworkUpdateWithoutCaseTransferInput";
import { NetworkUpsertWithoutCaseTransferInput } from "../inputs/NetworkUpsertWithoutCaseTransferInput";
import { NetworkWhereUniqueInput } from "../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkUpdateOneWithoutCaseTransferInput {
  @TypeGraphQL.Field(_type => NetworkCreateWithoutCaseTransferInput, {
    nullable: true
  })
  create?: NetworkCreateWithoutCaseTransferInput | undefined;

  @TypeGraphQL.Field(_type => NetworkCreateOrConnectWithoutCaseTransferInput, {
    nullable: true
  })
  connectOrCreate?: NetworkCreateOrConnectWithoutCaseTransferInput | undefined;

  @TypeGraphQL.Field(_type => NetworkUpsertWithoutCaseTransferInput, {
    nullable: true
  })
  upsert?: NetworkUpsertWithoutCaseTransferInput | undefined;

  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: true
  })
  connect?: NetworkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => NetworkUpdateWithoutCaseTransferInput, {
    nullable: true
  })
  update?: NetworkUpdateWithoutCaseTransferInput | undefined;
}
