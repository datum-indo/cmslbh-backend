import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestCreateInput } from "../../../inputs/LogRequestCreateInput";
import { LogRequestUpdateInput } from "../../../inputs/LogRequestUpdateInput";
import { LogRequestWhereUniqueInput } from "../../../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLogRequestArgs {
  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestCreateInput, {
    nullable: false
  })
  create!: LogRequestCreateInput;

  @TypeGraphQL.Field(_type => LogRequestUpdateInput, {
    nullable: false
  })
  update!: LogRequestUpdateInput;
}
