import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcAnalisaOrderByInput } from "../../../inputs/SrcAnalisaOrderByInput";
import { SrcAnalisaWhereInput } from "../../../inputs/SrcAnalisaWhereInput";
import { SrcAnalisaWhereUniqueInput } from "../../../inputs/SrcAnalisaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSrcAnalisaArgs {
  @TypeGraphQL.Field(_type => SrcAnalisaWhereInput, {
    nullable: true
  })
  where?: SrcAnalisaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SrcAnalisaOrderByInput], {
    nullable: true
  })
  orderBy?: SrcAnalisaOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => SrcAnalisaWhereUniqueInput, {
    nullable: true
  })
  cursor?: SrcAnalisaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
