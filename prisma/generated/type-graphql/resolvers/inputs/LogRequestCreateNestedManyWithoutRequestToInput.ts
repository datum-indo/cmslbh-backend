import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutRequestToInput } from "../inputs/LogRequestCreateOrConnectWithoutRequestToInput";
import { LogRequestCreateWithoutRequestToInput } from "../inputs/LogRequestCreateWithoutRequestToInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestCreateNestedManyWithoutRequestToInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutRequestToInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutRequestToInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutRequestToInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutRequestToInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestWhereUniqueInput[] | undefined;
}
