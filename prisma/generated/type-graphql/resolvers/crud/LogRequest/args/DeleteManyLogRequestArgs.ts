import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestWhereInput } from "../../../inputs/LogRequestWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLogRequestArgs {
  @TypeGraphQL.Field(_type => LogRequestWhereInput, {
    nullable: true
  })
  where?: LogRequestWhereInput | undefined;
}
