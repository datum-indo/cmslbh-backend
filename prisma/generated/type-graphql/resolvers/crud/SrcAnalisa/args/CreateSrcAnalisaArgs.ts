import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcAnalisaCreateInput } from "../../../inputs/SrcAnalisaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSrcAnalisaArgs {
  @TypeGraphQL.Field(_type => SrcAnalisaCreateInput, {
    nullable: false
  })
  data!: SrcAnalisaCreateInput;
}
