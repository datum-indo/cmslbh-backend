import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcOperatorWhereInput } from "../../../inputs/SrcOperatorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySrcOperatorArgs {
  @TypeGraphQL.Field(_type => SrcOperatorWhereInput, {
    nullable: true
  })
  where?: SrcOperatorWhereInput | undefined;
}
