import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RenamedcaseOrderByInput } from "../../../inputs/RenamedcaseOrderByInput";
import { RenamedcaseWhereInput } from "../../../inputs/RenamedcaseWhereInput";
import { RenamedcaseWhereUniqueInput } from "../../../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRenamedcaseArgs {
  @TypeGraphQL.Field(_type => RenamedcaseWhereInput, {
    nullable: true
  })
  where?: RenamedcaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RenamedcaseOrderByInput], {
    nullable: true
  })
  orderBy?: RenamedcaseOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  cursor?: RenamedcaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
