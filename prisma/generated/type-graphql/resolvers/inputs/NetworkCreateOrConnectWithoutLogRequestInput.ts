import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateWithoutLogRequestInput } from "../inputs/NetworkCreateWithoutLogRequestInput";
import { NetworkWhereUniqueInput } from "../inputs/NetworkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkCreateOrConnectWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => NetworkWhereUniqueInput, {
    nullable: false
  })
  where!: NetworkWhereUniqueInput;

  @TypeGraphQL.Field(_type => NetworkCreateWithoutLogRequestInput, {
    nullable: false
  })
  create!: NetworkCreateWithoutLogRequestInput;
}
