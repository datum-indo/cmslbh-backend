import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateWithoutNetworkIdInput } from "../inputs/LogRequestCreateWithoutNetworkIdInput";
import { LogRequestUpdateWithoutNetworkIdInput } from "../inputs/LogRequestUpdateWithoutNetworkIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpsertWithWhereUniqueWithoutNetworkIdInput {
  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestUpdateWithoutNetworkIdInput, {
    nullable: false
  })
  update!: LogRequestUpdateWithoutNetworkIdInput;

  @TypeGraphQL.Field(_type => LogRequestCreateWithoutNetworkIdInput, {
    nullable: false
  })
  create!: LogRequestCreateWithoutNetworkIdInput;
}
