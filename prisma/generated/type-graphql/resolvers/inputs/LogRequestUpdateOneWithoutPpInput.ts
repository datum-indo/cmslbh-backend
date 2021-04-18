import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutPpInput } from "../inputs/LogRequestCreateOrConnectWithoutPpInput";
import { LogRequestCreateWithoutPpInput } from "../inputs/LogRequestCreateWithoutPpInput";
import { LogRequestUpdateWithoutPpInput } from "../inputs/LogRequestUpdateWithoutPpInput";
import { LogRequestUpsertWithoutPpInput } from "../inputs/LogRequestUpsertWithoutPpInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateOneWithoutPpInput {
  @TypeGraphQL.Field(_type => LogRequestCreateWithoutPpInput, {
    nullable: true
  })
  create?: LogRequestCreateWithoutPpInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestCreateOrConnectWithoutPpInput, {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutPpInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestUpsertWithoutPpInput, {
    nullable: true
  })
  upsert?: LogRequestUpsertWithoutPpInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: true
  })
  connect?: LogRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LogRequestUpdateWithoutPpInput, {
    nullable: true
  })
  update?: LogRequestUpdateWithoutPpInput | undefined;
}
