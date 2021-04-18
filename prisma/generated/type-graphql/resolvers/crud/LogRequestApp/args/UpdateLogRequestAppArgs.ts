import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestAppUpdateInput } from "../../../inputs/LogRequestAppUpdateInput";
import { LogRequestAppWhereUniqueInput } from "../../../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLogRequestAppArgs {
  @TypeGraphQL.Field(_type => LogRequestAppUpdateInput, {
    nullable: false
  })
  data!: LogRequestAppUpdateInput;

  @TypeGraphQL.Field(_type => LogRequestAppWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestAppWhereUniqueInput;
}
