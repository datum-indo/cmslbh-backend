import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutPpInput } from "../inputs/LogRequestCreateOrConnectWithoutPpInput";
import { LogRequestCreateWithoutPpInput } from "../inputs/LogRequestCreateWithoutPpInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestCreateNestedOneWithoutPpInput {
  @TypeGraphQL.Field(_type => LogRequestCreateWithoutPpInput, {
    nullable: true
  })
  create?: LogRequestCreateWithoutPpInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestCreateOrConnectWithoutPpInput, {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutPpInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: true
  })
  connect?: LogRequestWhereUniqueInput | undefined;
}
