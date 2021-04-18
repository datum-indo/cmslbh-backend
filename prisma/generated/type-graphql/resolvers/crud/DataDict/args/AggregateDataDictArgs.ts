import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictOrderByInput } from "../../../inputs/DataDictOrderByInput";
import { DataDictWhereInput } from "../../../inputs/DataDictWhereInput";
import { DataDictWhereUniqueInput } from "../../../inputs/DataDictWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDataDictArgs {
  @TypeGraphQL.Field(_type => DataDictWhereInput, {
    nullable: true
  })
  where?: DataDictWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DataDictOrderByInput], {
    nullable: true
  })
  orderBy?: DataDictOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DataDictWhereUniqueInput, {
    nullable: true
  })
  cursor?: DataDictWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
