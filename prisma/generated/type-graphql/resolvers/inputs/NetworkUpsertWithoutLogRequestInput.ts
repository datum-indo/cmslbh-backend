import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkCreateWithoutLogRequestInput } from "../inputs/NetworkCreateWithoutLogRequestInput";
import { NetworkUpdateWithoutLogRequestInput } from "../inputs/NetworkUpdateWithoutLogRequestInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NetworkUpsertWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => NetworkUpdateWithoutLogRequestInput, {
    nullable: false
  })
  update!: NetworkUpdateWithoutLogRequestInput;

  @TypeGraphQL.Field(_type => NetworkCreateWithoutLogRequestInput, {
    nullable: false
  })
  create!: NetworkCreateWithoutLogRequestInput;
}
