import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestAppOrderByInput } from "../../../inputs/LogRequestAppOrderByInput";
import { LogRequestAppWhereInput } from "../../../inputs/LogRequestAppWhereInput";
import { LogRequestAppWhereUniqueInput } from "../../../inputs/LogRequestAppWhereUniqueInput";
import { LogRequestAppScalarFieldEnum } from "../../../../enums/LogRequestAppScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLogRequestAppArgs {
  @TypeGraphQL.Field(_type => LogRequestAppWhereInput, {
    nullable: true
  })
  where?: LogRequestAppWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppOrderByInput], {
    nullable: true
  })
  orderBy?: LogRequestAppOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => LogRequestAppWhereUniqueInput, {
    nullable: true
  })
  cursor?: LogRequestAppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "log_request_id" | "app_consultation" | "keterangan"> | undefined;
}
