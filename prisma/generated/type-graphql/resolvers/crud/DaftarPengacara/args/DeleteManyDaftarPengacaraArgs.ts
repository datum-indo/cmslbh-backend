import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DaftarPengacaraWhereInput } from "../../../inputs/DaftarPengacaraWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDaftarPengacaraArgs {
  @TypeGraphQL.Field(_type => DaftarPengacaraWhereInput, {
    nullable: true
  })
  where?: DaftarPengacaraWhereInput | undefined;
}
