import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestAppCreateInput } from "../../../inputs/LogRequestAppCreateInput";
import { LogRequestAppUpdateInput } from "../../../inputs/LogRequestAppUpdateInput";
import { LogRequestAppWhereUniqueInput } from "../../../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLogRequestAppArgs {
  @TypeGraphQL.Field(_type => LogRequestAppWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestAppWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestAppCreateInput, {
    nullable: false
  })
  create!: LogRequestAppCreateInput;

  @TypeGraphQL.Field(_type => LogRequestAppUpdateInput, {
    nullable: false
  })
  update!: LogRequestAppUpdateInput;
}
