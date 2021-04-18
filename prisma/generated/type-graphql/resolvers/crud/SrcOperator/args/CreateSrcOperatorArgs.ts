import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcOperatorCreateInput } from "../../../inputs/SrcOperatorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSrcOperatorArgs {
  @TypeGraphQL.Field(_type => SrcOperatorCreateInput, {
    nullable: false
  })
  data!: SrcOperatorCreateInput;
}
