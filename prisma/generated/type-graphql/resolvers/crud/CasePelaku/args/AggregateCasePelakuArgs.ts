import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePelakuOrderByInput } from "../../../inputs/CasePelakuOrderByInput";
import { CasePelakuWhereInput } from "../../../inputs/CasePelakuWhereInput";
import { CasePelakuWhereUniqueInput } from "../../../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCasePelakuArgs {
  @TypeGraphQL.Field(_type => CasePelakuWhereInput, {
    nullable: true
  })
  where?: CasePelakuWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuOrderByInput], {
    nullable: true
  })
  orderBy?: CasePelakuOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CasePelakuWhereUniqueInput, {
    nullable: true
  })
  cursor?: CasePelakuWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
