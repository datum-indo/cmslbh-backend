import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestAppWhereInput } from "../../../inputs/LogRequestAppWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLogRequestAppArgs {
  @TypeGraphQL.Field(_type => LogRequestAppWhereInput, {
    nullable: true
  })
  where?: LogRequestAppWhereInput | undefined;
}
