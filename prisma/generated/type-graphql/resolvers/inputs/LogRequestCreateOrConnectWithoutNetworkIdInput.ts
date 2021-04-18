import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateWithoutNetworkIdInput } from "../inputs/LogRequestCreateWithoutNetworkIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestCreateOrConnectWithoutNetworkIdInput {
  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestCreateWithoutNetworkIdInput, {
    nullable: false
  })
  create!: LogRequestCreateWithoutNetworkIdInput;
}
