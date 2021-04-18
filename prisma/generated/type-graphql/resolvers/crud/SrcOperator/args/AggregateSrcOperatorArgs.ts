import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcOperatorOrderByInput } from "../../../inputs/SrcOperatorOrderByInput";
import { SrcOperatorWhereInput } from "../../../inputs/SrcOperatorWhereInput";
import { SrcOperatorWhereUniqueInput } from "../../../inputs/SrcOperatorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSrcOperatorArgs {
  @TypeGraphQL.Field(_type => SrcOperatorWhereInput, {
    nullable: true
  })
  where?: SrcOperatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SrcOperatorOrderByInput], {
    nullable: true
  })
  orderBy?: SrcOperatorOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => SrcOperatorWhereUniqueInput, {
    nullable: true
  })
  cursor?: SrcOperatorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
