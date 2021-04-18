import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestUpdateInput } from "../../../inputs/LogRequestUpdateInput";
import { LogRequestWhereUniqueInput } from "../../../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLogRequestArgs {
  @TypeGraphQL.Field(_type => LogRequestUpdateInput, {
    nullable: false
  })
  data!: LogRequestUpdateInput;

  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;
}
