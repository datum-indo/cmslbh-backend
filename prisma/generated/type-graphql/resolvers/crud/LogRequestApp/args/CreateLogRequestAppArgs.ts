import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestAppCreateInput } from "../../../inputs/LogRequestAppCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLogRequestAppArgs {
  @TypeGraphQL.Field(_type => LogRequestAppCreateInput, {
    nullable: false
  })
  data!: LogRequestAppCreateInput;
}
