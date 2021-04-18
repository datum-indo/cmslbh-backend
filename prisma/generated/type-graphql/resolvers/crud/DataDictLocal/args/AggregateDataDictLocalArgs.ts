import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictLocalOrderByInput } from "../../../inputs/DataDictLocalOrderByInput";
import { DataDictLocalWhereInput } from "../../../inputs/DataDictLocalWhereInput";
import { DataDictLocalWhereUniqueInput } from "../../../inputs/DataDictLocalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDataDictLocalArgs {
  @TypeGraphQL.Field(_type => DataDictLocalWhereInput, {
    nullable: true
  })
  where?: DataDictLocalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalOrderByInput], {
    nullable: true
  })
  orderBy?: DataDictLocalOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DataDictLocalWhereUniqueInput, {
    nullable: true
  })
  cursor?: DataDictLocalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
