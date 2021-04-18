import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePkOrderByInput } from "../../../inputs/CasePkOrderByInput";
import { CasePkWhereInput } from "../../../inputs/CasePkWhereInput";
import { CasePkWhereUniqueInput } from "../../../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCasePkArgs {
  @TypeGraphQL.Field(_type => CasePkWhereInput, {
    nullable: true
  })
  where?: CasePkWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CasePkOrderByInput], {
    nullable: true
  })
  orderBy?: CasePkOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CasePkWhereUniqueInput, {
    nullable: true
  })
  cursor?: CasePkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
