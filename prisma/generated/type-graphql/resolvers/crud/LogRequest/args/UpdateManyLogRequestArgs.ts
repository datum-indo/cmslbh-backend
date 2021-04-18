import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestUpdateManyMutationInput } from "../../../inputs/LogRequestUpdateManyMutationInput";
import { LogRequestWhereInput } from "../../../inputs/LogRequestWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLogRequestArgs {
  @TypeGraphQL.Field(_type => LogRequestUpdateManyMutationInput, {
    nullable: false
  })
  data!: LogRequestUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LogRequestWhereInput, {
    nullable: true
  })
  where?: LogRequestWhereInput | undefined;
}
