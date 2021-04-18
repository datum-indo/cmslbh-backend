import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutNetworkIdInput } from "../inputs/LogRequestCreateOrConnectWithoutNetworkIdInput";
import { LogRequestCreateWithoutNetworkIdInput } from "../inputs/LogRequestCreateWithoutNetworkIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestCreateNestedManyWithoutNetworkIdInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutNetworkIdInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutNetworkIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutNetworkIdInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutNetworkIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestWhereUniqueInput[] | undefined;
}
