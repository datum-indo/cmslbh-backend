import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcAnalisaCreateInput } from "../../../inputs/SrcAnalisaCreateInput";
import { SrcAnalisaUpdateInput } from "../../../inputs/SrcAnalisaUpdateInput";
import { SrcAnalisaWhereUniqueInput } from "../../../inputs/SrcAnalisaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSrcAnalisaArgs {
  @TypeGraphQL.Field(_type => SrcAnalisaWhereUniqueInput, {
    nullable: false
  })
  where!: SrcAnalisaWhereUniqueInput;

  @TypeGraphQL.Field(_type => SrcAnalisaCreateInput, {
    nullable: false
  })
  create!: SrcAnalisaCreateInput;

  @TypeGraphQL.Field(_type => SrcAnalisaUpdateInput, {
    nullable: false
  })
  update!: SrcAnalisaUpdateInput;
}
