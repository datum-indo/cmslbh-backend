import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SrcAnalisaWhereInput } from "../../../inputs/SrcAnalisaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySrcAnalisaArgs {
  @TypeGraphQL.Field(_type => SrcAnalisaWhereInput, {
    nullable: true
  })
  where?: SrcAnalisaWhereInput | undefined;
}
