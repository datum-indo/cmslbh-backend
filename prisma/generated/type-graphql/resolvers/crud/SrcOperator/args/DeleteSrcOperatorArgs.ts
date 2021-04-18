import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcOperatorWhereUniqueInput } from "../../../inputs/SrcOperatorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSrcOperatorArgs {
  @TypeGraphQL.Field(_type => SrcOperatorWhereUniqueInput, {
    nullable: false
  })
  where!: SrcOperatorWhereUniqueInput;
}
