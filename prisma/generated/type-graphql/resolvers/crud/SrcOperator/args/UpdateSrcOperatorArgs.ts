import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcOperatorUpdateInput } from "../../../inputs/SrcOperatorUpdateInput";
import { SrcOperatorWhereUniqueInput } from "../../../inputs/SrcOperatorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSrcOperatorArgs {
  @TypeGraphQL.Field(_type => SrcOperatorUpdateInput, {
    nullable: false
  })
  data!: SrcOperatorUpdateInput;

  @TypeGraphQL.Field(_type => SrcOperatorWhereUniqueInput, {
    nullable: false
  })
  where!: SrcOperatorWhereUniqueInput;
}
