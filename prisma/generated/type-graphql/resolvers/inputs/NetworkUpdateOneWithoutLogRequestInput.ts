import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateOrConnectWithoutLogRequestInput } from "../inputs/NetworkCreateOrConnectWithoutLogRequestInput";
import { NetworkCreateWithoutLogRequestInput } from "../inputs/NetworkCreateWithoutLogRequestInput";
import { NetworkUpdateWithoutLogRequestInput } from "../inputs/NetworkUpdateWithoutLogRequestInput";
import { NetworkUpsertWithoutLogRequestInput } from "../inputs/NetworkUpsertWithoutLogRequestInput";
import { NetworkWhereUniqueInput } from "../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkUpdateOneWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => NetworkCreateWithoutLogRequestInput, {
    nullable: true
  })
  create?: NetworkCreateWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => NetworkCreateOrConnectWithoutLogRequestInput, {
    nullable: true
  })
  connectOrCreate?: NetworkCreateOrConnectWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => NetworkUpsertWithoutLogRequestInput, {
    nullable: true
  })
  upsert?: NetworkUpsertWithoutLogRequestInput | undefined;

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

  @TypeGraphQL.Field(_type => NetworkUpdateWithoutLogRequestInput, {
    nullable: true
  })
  update?: NetworkUpdateWithoutLogRequestInput | undefined;
}
