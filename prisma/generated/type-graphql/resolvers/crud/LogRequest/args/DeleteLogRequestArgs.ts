import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestWhereUniqueInput } from "../../../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLogRequestArgs {
  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;
}
