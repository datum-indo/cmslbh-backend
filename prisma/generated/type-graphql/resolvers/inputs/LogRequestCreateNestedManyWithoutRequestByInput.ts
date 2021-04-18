import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutRequestByInput } from "../inputs/LogRequestCreateOrConnectWithoutRequestByInput";
import { LogRequestCreateWithoutRequestByInput } from "../inputs/LogRequestCreateWithoutRequestByInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestCreateNestedManyWithoutRequestByInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutRequestByInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutRequestByInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutRequestByInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutRequestByInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestWhereUniqueInput[] | undefined;
}
