import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestAppWhereUniqueInput } from "../../../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLogRequestAppArgs {
  @TypeGraphQL.Field(_type => LogRequestAppWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestAppWhereUniqueInput;
}
