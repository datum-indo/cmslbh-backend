import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LogRequestAppUpdateManyMutationInput } from "../../../inputs/LogRequestAppUpdateManyMutationInput";
import { LogRequestAppWhereInput } from "../../../inputs/LogRequestAppWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLogRequestAppArgs {
  @TypeGraphQL.Field(_type => LogRequestAppUpdateManyMutationInput, {
    nullable: false
  })
  data!: LogRequestAppUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LogRequestAppWhereInput, {
    nullable: true
  })
  where?: LogRequestAppWhereInput | undefined;
}
