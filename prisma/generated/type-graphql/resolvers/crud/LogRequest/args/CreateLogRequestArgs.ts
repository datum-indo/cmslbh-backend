import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestCreateInput } from "../../../inputs/LogRequestCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLogRequestArgs {
  @TypeGraphQL.Field(_type => LogRequestCreateInput, {
    nullable: false
  })
  data!: LogRequestCreateInput;
}
