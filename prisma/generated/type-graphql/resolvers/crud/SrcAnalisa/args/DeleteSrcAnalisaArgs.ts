import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcAnalisaWhereUniqueInput } from "../../../inputs/SrcAnalisaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSrcAnalisaArgs {
  @TypeGraphQL.Field(_type => SrcAnalisaWhereUniqueInput, {
    nullable: false
  })
  where!: SrcAnalisaWhereUniqueInput;
}
