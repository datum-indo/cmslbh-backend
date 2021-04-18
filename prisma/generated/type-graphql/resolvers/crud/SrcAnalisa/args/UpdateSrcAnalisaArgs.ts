import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcAnalisaUpdateInput } from "../../../inputs/SrcAnalisaUpdateInput";
import { SrcAnalisaWhereUniqueInput } from "../../../inputs/SrcAnalisaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSrcAnalisaArgs {
  @TypeGraphQL.Field(_type => SrcAnalisaUpdateInput, {
    nullable: false
  })
  data!: SrcAnalisaUpdateInput;

  @TypeGraphQL.Field(_type => SrcAnalisaWhereUniqueInput, {
    nullable: false
  })
  where!: SrcAnalisaWhereUniqueInput;
}
