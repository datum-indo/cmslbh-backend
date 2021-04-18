import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcOperatorCreateInput } from "../../../inputs/SrcOperatorCreateInput";
import { SrcOperatorUpdateInput } from "../../../inputs/SrcOperatorUpdateInput";
import { SrcOperatorWhereUniqueInput } from "../../../inputs/SrcOperatorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSrcOperatorArgs {
  @TypeGraphQL.Field(_type => SrcOperatorWhereUniqueInput, {
    nullable: false
  })
  where!: SrcOperatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => SrcOperatorCreateInput, {
    nullable: false
  })
  create!: SrcOperatorCreateInput;

  @TypeGraphQL.Field(_type => SrcOperatorUpdateInput, {
    nullable: false
  })
  update!: SrcOperatorUpdateInput;
}
